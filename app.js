// ============================================================
// Toimiston Sijaintioptimoija - Application Logic
// ============================================================

(function () {
    'use strict';

    // --- State ---
    let employees = [];
    let map;
    let markersLayer;
    let resultsLayer;

    // --- DOM Elements ---
    const form = document.getElementById('employee-form');
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const weightInput = document.getElementById('weight');
    const employeeList = document.getElementById('employee-list');
    const employeeCount = document.getElementById('employee-count');
    const calculateBtn = document.getElementById('calculate-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const importCsvBtn = document.getElementById('import-csv-btn');
    const exportCsvBtn = document.getElementById('export-csv-btn');
    const loadExampleBtn = document.getElementById('load-example-btn');
    const csvFileInput = document.getElementById('csv-file-input');
    const resultsPanel = document.getElementById('results-panel');
    const resultsContent = document.getElementById('results-content');
    const closeResults = document.getElementById('close-results');
    const statusBar = document.getElementById('status-bar');
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');

    // --- Initialize Map ---
    function initMap() {
        map = L.map('map').setView([61.5, 24.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 18,
        }).addTo(map);
        markersLayer = L.layerGroup().addTo(map);
        resultsLayer = L.layerGroup().addTo(map);
    }

    // --- Geocoding (Nominatim) ---
    async function geocode(address) {
        const query = address.match(/^\d{5}$/)
            ? `${address}, Finland`
            : address;

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&countrycodes=fi`;

        const response = await fetch(url, {
            headers: { 'Accept-Language': 'fi' }
        });

        if (!response.ok) {
            throw new Error(`Geokoodaus epäonnistui: ${response.status}`);
        }

        const data = await response.json();
        if (data.length === 0) {
            throw new Error(`Osoitetta ei löytynyt: "${address}"`);
        }

        return {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
            displayName: data[0].display_name,
        };
    }

    // Rate-limited geocoding to respect Nominatim's 1 req/sec policy
    async function geocodeWithDelay(address, delayMs) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
        return geocode(address);
    }

    // --- Distance Calculation (Haversine) ---
    function haversineDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // km
        const dLat = toRad(lat2 - lat1);
        const dLng = toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    function toRad(deg) {
        return deg * (Math.PI / 180);
    }

    // --- Optimization Algorithms ---

    // Weighted centroid (center of mass)
    function weightedCentroid(points) {
        let totalWeight = 0;
        let sumLat = 0;
        let sumLng = 0;

        for (const p of points) {
            sumLat += p.lat * p.weight;
            sumLng += p.lng * p.weight;
            totalWeight += p.weight;
        }

        return {
            lat: sumLat / totalWeight,
            lng: sumLng / totalWeight,
        };
    }

    // Geometric median using Weiszfeld's algorithm (minimizes total weighted distance)
    function geometricMedian(points, maxIterations = 1000, tolerance = 1e-7) {
        // Start from weighted centroid as initial guess
        let current = weightedCentroid(points);

        for (let iter = 0; iter < maxIterations; iter++) {
            let numeratorLat = 0;
            let numeratorLng = 0;
            let denominator = 0;

            for (const p of points) {
                const dist = haversineDistance(current.lat, current.lng, p.lat, p.lng);
                if (dist < 1e-10) continue; // Avoid division by zero

                const w = p.weight / dist;
                numeratorLat += w * p.lat;
                numeratorLng += w * p.lng;
                denominator += w;
            }

            if (denominator === 0) break;

            const newLat = numeratorLat / denominator;
            const newLng = numeratorLng / denominator;

            const shift = haversineDistance(current.lat, current.lng, newLat, newLng);
            current = { lat: newLat, lng: newLng };

            if (shift < tolerance) break;
        }

        return current;
    }

    // Calculate total weighted distance for a point
    function totalWeightedDistance(center, points) {
        let total = 0;
        for (const p of points) {
            total += haversineDistance(center.lat, center.lng, p.lat, p.lng) * p.weight;
        }
        return total;
    }

    // --- Employee Management ---
    function addEmployee(name, address, weight, coords) {
        const employee = {
            id: Date.now() + Math.random(),
            name,
            address,
            weight,
            lat: coords.lat,
            lng: coords.lng,
            displayName: coords.displayName,
        };
        employees.push(employee);
        updateUI();
        addMarker(employee);
        return employee;
    }

    function removeEmployee(id) {
        employees = employees.filter(e => e.id !== id);
        updateUI();
        refreshMarkers();
    }

    function updateUI() {
        employeeCount.textContent = employees.length;
        calculateBtn.disabled = employees.length < 2;

        employeeList.innerHTML = '';
        for (const emp of employees) {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="employee-info">
                    <div class="employee-name">${escapeHtml(emp.name)}</div>
                    <div class="employee-address">${escapeHtml(emp.address)}</div>
                </div>
                <span class="employee-weight">${emp.weight} pv/vko</span>
                <button class="remove-btn" title="Poista">&times;</button>
            `;
            li.querySelector('.remove-btn').addEventListener('click', () => removeEmployee(emp.id));
            employeeList.appendChild(li);
        }
    }

    // --- Map Markers ---
    const employeeIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background:#2563eb;width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
    });

    const medianIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background:#dc2626;width:20px;height:20px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:bold"></div>',
        iconSize: [26, 26],
        iconAnchor: [13, 13],
    });

    const centroidIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background:#ca8a04;width:20px;height:20px;border-radius:4px;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4)"></div>',
        iconSize: [26, 26],
        iconAnchor: [13, 13],
    });

    function addMarker(emp) {
        const marker = L.marker([emp.lat, emp.lng], { icon: employeeIcon })
            .bindPopup(`<b>${escapeHtml(emp.name)}</b><br>${escapeHtml(emp.address)}<br>${emp.weight} pv/vko`);
        markersLayer.addLayer(marker);
        fitMapToMarkers();
    }

    function refreshMarkers() {
        markersLayer.clearLayers();
        for (const emp of employees) {
            const marker = L.marker([emp.lat, emp.lng], { icon: employeeIcon })
                .bindPopup(`<b>${escapeHtml(emp.name)}</b><br>${escapeHtml(emp.address)}<br>${emp.weight} pv/vko`);
            markersLayer.addLayer(marker);
        }
        fitMapToMarkers();
    }

    function fitMapToMarkers() {
        const allLayers = [...markersLayer.getLayers(), ...resultsLayer.getLayers()];
        if (allLayers.length > 0) {
            const group = L.featureGroup(allLayers);
            map.fitBounds(group.getBounds().pad(0.15));
        }
    }

    // --- Calculate & Display Results ---
    function calculate() {
        const method = document.querySelector('input[name="method"]:checked').value;
        const points = employees.map(e => ({ lat: e.lat, lng: e.lng, weight: e.weight }));

        resultsLayer.clearLayers();
        let html = '';

        if (method === 'median' || method === 'both') {
            const median = geometricMedian(points);
            const totalDist = totalWeightedDistance(median, points);

            const marker = L.marker([median.lat, median.lng], { icon: medianIcon })
                .bindPopup(`<b>Optimaalinen sijainti</b><br>(Geometrinen mediaani)<br>Lat: ${median.lat.toFixed(5)}<br>Lng: ${median.lng.toFixed(5)}`);
            resultsLayer.addLayer(marker);

            // Draw lines from optimal point to employees
            for (const emp of employees) {
                const line = L.polyline([[median.lat, median.lng], [emp.lat, emp.lng]], {
                    color: '#2563eb',
                    weight: 1.5,
                    opacity: 0.4,
                    dashArray: '5,5',
                });
                resultsLayer.addLayer(line);
            }

            html += buildResultBlock('Geometrinen mediaani', 'result-block', median, points, totalDist);
        }

        if (method === 'centroid' || method === 'both') {
            const centroid = weightedCentroid(points);
            const totalDist = totalWeightedDistance(centroid, points);

            const marker = L.marker([centroid.lat, centroid.lng], { icon: centroidIcon })
                .bindPopup(`<b>Painotettu keskipiste</b><br>Lat: ${centroid.lat.toFixed(5)}<br>Lng: ${centroid.lng.toFixed(5)}`);
            resultsLayer.addLayer(marker);

            if (method === 'centroid') {
                for (const emp of employees) {
                    const line = L.polyline([[centroid.lat, centroid.lng], [emp.lat, emp.lng]], {
                        color: '#ca8a04',
                        weight: 1.5,
                        opacity: 0.4,
                        dashArray: '5,5',
                    });
                    resultsLayer.addLayer(line);
                }
            }

            html += buildResultBlock('Painotettu keskipiste', 'result-block centroid-result', centroid, points, totalDist);
        }

        resultsContent.innerHTML = html;
        resultsPanel.classList.remove('hidden');
        fitMapToMarkers();
        setStatus('Laskenta valmis');
    }

    function buildResultBlock(title, cssClass, center, points, totalDist) {
        const distances = employees.map((emp, i) => ({
            name: emp.name,
            distance: haversineDistance(center.lat, center.lng, points[i].lat, points[i].lng),
            weighted: haversineDistance(center.lat, center.lng, points[i].lat, points[i].lng) * points[i].weight,
        })).sort((a, b) => b.distance - a.distance);

        const maxDist = distances[0].distance;
        const avgDist = distances.reduce((s, d) => s + d.distance, 0) / distances.length;

        let html = `<div class="${cssClass}">`;
        html += `<h3>${title}</h3>`;
        html += `<div class="result-stat"><span class="label">Sijainti</span><span class="value">${center.lat.toFixed(4)}, ${center.lng.toFixed(4)}</span></div>`;
        html += `<div class="result-stat"><span class="label">Kokonaismatka (painotettu)</span><span class="value">${totalDist.toFixed(1)} km</span></div>`;
        html += `<div class="result-stat"><span class="label">Keskimääräinen etäisyys</span><span class="value">${avgDist.toFixed(1)} km</span></div>`;
        html += `<div class="result-stat"><span class="label">Pisin etäisyys</span><span class="value">${maxDist.toFixed(1)} km</span></div>`;

        html += `<div class="distance-list"><h4>Etäisyydet henkilöittäin:</h4>`;
        for (const d of distances) {
            html += `<div class="distance-item"><span>${escapeHtml(d.name)}</span><span>${d.distance.toFixed(1)} km</span></div>`;
        }
        html += `</div></div>`;

        return html;
    }

    // --- CSV Import / Export ---
    function exportCSV() {
        if (employees.length === 0) {
            alert('Ei henkilökuntaa vietäväksi.');
            return;
        }

        let csv = 'nimi;osoite;painoarvo\n';
        for (const emp of employees) {
            csv += `${emp.name};${emp.address};${emp.weight}\n`;
        }

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'henkilokunta.csv';
        a.click();
        URL.revokeObjectURL(url);
        setStatus('CSV viety');
    }

    async function importCSV(file) {
        const text = await file.text();
        const lines = text.trim().split('\n');

        // Skip header if present
        const start = lines[0].toLowerCase().includes('nimi') ? 1 : 0;
        const entries = [];

        for (let i = start; i < lines.length; i++) {
            const parts = lines[i].split(';').map(s => s.trim());
            if (parts.length >= 2) {
                entries.push({
                    name: parts[0],
                    address: parts[1],
                    weight: parseInt(parts[2]) || 5,
                });
            }
        }

        if (entries.length === 0) {
            alert('CSV-tiedostosta ei löytynyt tietoja.');
            return;
        }

        showLoading(`Geokoodataan osoitteita... (0/${entries.length})`);
        let success = 0;
        let failed = [];

        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            updateLoading(`Geokoodataan osoitteita... (${i + 1}/${entries.length}): ${entry.name}`);

            try {
                const coords = await geocodeWithDelay(entry.address, i === 0 ? 0 : 1100);
                addEmployee(entry.name, entry.address, entry.weight, coords);
                success++;
            } catch (err) {
                failed.push(`${entry.name}: ${err.message}`);
            }
        }

        hideLoading();

        if (failed.length > 0) {
            alert(`Tuotu ${success}/${entries.length} henkilöä.\n\nEpäonnistuneet:\n${failed.join('\n')}`);
        } else {
            setStatus(`${success} henkilöä tuotu CSV:stä`);
        }
    }

    // --- Example Data ---
    async function loadExample() {
        const exampleData = [
            { name: 'Anna Korhonen', address: '00100 Helsinki', weight: 5 },
            { name: 'Mikko Virtanen', address: '02100 Espoo', weight: 5 },
            { name: 'Liisa Mäkinen', address: '33100 Tampere', weight: 4 },
            { name: 'Juha Nieminen', address: '01300 Vantaa', weight: 5 },
            { name: 'Sari Laine', address: '04200 Kerava', weight: 3 },
            { name: 'Pekka Hämäläinen', address: '15100 Lahti', weight: 4 },
        ];

        showLoading(`Ladataan esimerkkitietoja... (0/${exampleData.length})`);
        let success = 0;

        for (let i = 0; i < exampleData.length; i++) {
            const entry = exampleData[i];
            updateLoading(`Geokoodataan: ${entry.name} (${i + 1}/${exampleData.length})`);

            try {
                const coords = await geocodeWithDelay(entry.address, i === 0 ? 0 : 1100);
                addEmployee(entry.name, entry.address, entry.weight, coords);
                success++;
            } catch (err) {
                console.error(`Geokoodaus epäonnistui: ${entry.name}`, err);
            }
        }

        hideLoading();
        setStatus(`${success} esimerkkihenkilöä ladattu`);
    }

    // --- Utility ---
    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function setStatus(text) {
        statusBar.textContent = text;
    }

    function showLoading(text) {
        loadingText.textContent = text;
        loadingOverlay.classList.remove('hidden');
    }

    function updateLoading(text) {
        loadingText.textContent = text;
    }

    function hideLoading() {
        loadingOverlay.classList.add('hidden');
    }

    // --- Event Handlers ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const address = addressInput.value.trim();
        const weight = parseInt(weightInput.value) || 5;

        if (!name || !address) return;

        calculateBtn.disabled = true;
        setStatus(`Geokoodataan: ${address}...`);

        try {
            const coords = await geocode(address);
            addEmployee(name, address, weight, coords);
            nameInput.value = '';
            addressInput.value = '';
            weightInput.value = '5';
            nameInput.focus();
            setStatus(`${name} lisätty (${coords.displayName})`);
        } catch (err) {
            alert(`Virhe: ${err.message}`);
            setStatus('Geokoodaus epäonnistui');
        }

        calculateBtn.disabled = employees.length < 2;
    });

    calculateBtn.addEventListener('click', () => {
        if (employees.length < 2) return;
        setStatus('Lasketaan optimaalista sijaintia...');
        // Use setTimeout to let UI update before heavy computation
        setTimeout(calculate, 50);
    });

    clearAllBtn.addEventListener('click', () => {
        if (employees.length === 0) return;
        if (!confirm('Haluatko varmasti poistaa kaikki henkilöt?')) return;
        employees = [];
        updateUI();
        markersLayer.clearLayers();
        resultsLayer.clearLayers();
        resultsPanel.classList.add('hidden');
        setStatus('Kaikki henkilöt poistettu');
    });

    closeResults.addEventListener('click', () => {
        resultsPanel.classList.add('hidden');
    });

    importCsvBtn.addEventListener('click', () => csvFileInput.click());
    csvFileInput.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            importCSV(e.target.files[0]);
            e.target.value = '';
        }
    });

    exportCsvBtn.addEventListener('click', exportCSV);
    loadExampleBtn.addEventListener('click', loadExample);

    // --- Init ---
    initMap();
    setStatus('Valmis – lisää henkilökuntaa aloittaaksesi');
})();
