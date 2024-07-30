function calculateAggregate() {
    // Get the input values
    const testMarks = parseFloat(document.getElementById('test-marks').value);
    const interviewMarks = parseFloat(document.getElementById('interview-marks').value);
    const fscMarks = parseFloat(document.getElementById('fsc-marks').value);

    // Validate inputs
    if (isNaN(testMarks) || isNaN(interviewMarks) || isNaN(fscMarks) ||
        testMarks < 0 || testMarks > 100 ||
        interviewMarks < 0 || interviewMarks > 10 ||
        fscMarks < 0 || fscMarks > 1200) {
        alert('Please enter valid numbers within the specified range for all fields.');
        return;
    }

    // Calculate weighted scores
    const testWeighted = (testMarks / 100) * 40;
    const interviewWeighted = interviewMarks; // Directly taken as 10% weight
    const fscWeighted = (fscMarks / 1200) * 50;

    // Update the HTML with intermediate values
    document.getElementById('test-weighted').innerText = `Test Weighted Score: ${testWeighted.toFixed(2)}%`;
    document.getElementById('interview-weighted').innerText = `Interview Weighted Score: ${interviewWeighted.toFixed(2)}%`;
    document.getElementById('fsc-weighted').innerText = `FSc Weighted Score: ${fscWeighted.toFixed(2)}%`;

    // Calculate total aggregate
    const aggregate = testWeighted + interviewWeighted + fscWeighted;

    // Update the HTML with the aggregate value
    document.getElementById('aggregate').innerText = `Your aggregate is: ${aggregate.toFixed(2)}%`;
}
function calculateAggregate() {
    // Get the input values
    const testMarks = parseFloat(document.getElementById('test-marks').value);
    const interviewMarks = parseFloat(document.getElementById('interview-marks').value);
    const fscMarks = parseFloat(document.getElementById('fsc-marks').value);

    // Validate inputs
    if (isNaN(testMarks) || isNaN(interviewMarks) || isNaN(fscMarks) ||
        testMarks < 0 || testMarks > 100 ||
        interviewMarks < 0 || interviewMarks > 10 ||
        fscMarks < 0 || fscMarks > 1200) {
        alert('Please enter valid numbers within the specified range for all fields.');
        return;
    }

    // Calculate weighted scores
    const testWeighted = (testMarks / 100) * 40;
    const interviewWeighted = interviewMarks; // Directly taken as 10% weight
    const fscWeighted = (fscMarks / 1200) * 50;

    
    // Calculate total aggregate
    const aggregate = testWeighted + interviewWeighted + fscWeighted;

    // Update the HTML with the aggregate value
    document.getElementById('aggregate').innerText = `Your aggregate is: ${aggregate.toFixed(2)}%`;
}
