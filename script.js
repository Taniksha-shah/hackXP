function analyzeSoil() {
    // Get input values
    const ph = parseFloat(document.getElementById('ph').value);
    const moisture = parseFloat(document.getElementById('moisture').value);
    const nitrogen = parseFloat(document.getElementById('nitrogen').value);
    const phosphorus = parseFloat(document.getElementById('phosphorus').value);
    const potassium = parseFloat(document.getElementById('potassium').value);

    // Validate input values
    if (isNaN(ph) || isNaN(moisture) || isNaN(nitrogen) || isNaN(phosphorus) || isNaN(potassium)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Basic soil quality analysis logic
    let quality = 'Soil Quality Analysis:<br>';

    if (ph < 6.0) {
        quality += 'Acidic soil - Needs lime.<br>';
    } else if (ph > 7.5) {
        quality += 'Alkaline soil - Needs sulfur.<br>';
    } else {
        quality += 'Neutral soil - Good for most plants.<br>';
    }

    if (moisture < 10) {
        quality += 'Low moisture - Consider irrigation.<br>';
    } else if (moisture > 30) {
        quality += 'High moisture - Check drainage.<br>';
    }

    if (nitrogen < 20) {
        quality += 'Low nitrogen - Add fertilizer.<br>';
    }

    if (phosphorus < 15) {
        quality += 'Low phosphorus - Add phosphorus.<br>';
    }

    if (potassium < 100) {
        quality += 'Low potassium - Add potassium.<br>';
    }

    // Display results
    document.getElementById('results').innerHTML = quality;
}
