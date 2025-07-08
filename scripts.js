function calculateAggregate() {
    // Get the input values
    const testMarks = parseFloat(document.getElementById('test-marks').value);
    const interviewMarks = parseFloat(document.getElementById('interview-marks').value);
    const fscMarks = parseFloat(document.getElementById('fsc-marks').value);

    // Validate inputs
    if (isNaN(testMarks) || isNaN(interviewMarks) || isNaN(fscMarks) ||
        testMarks < 0 || testMarks > 100 ||
        interviewMarks < 0 || interviewMarks > 10 ||
        fscMarks < 0 || fscMarks > 600) {
        alert('Please enter valid numbers within the specified range for all fields.');
        return;
    }

    // Calculate weighted scores
    const testWeighted = (testMarks / 100) * 40;
    const interviewWeighted = interviewMarks; // Directly taken as 10% weight
    const fscWeighted = (fscMarks / 600) * 50;

    // Calculate total aggregate
    const aggregate = testWeighted + interviewWeighted + fscWeighted;

    // Display result
    document.getElementById('aggregate').innerText = `Your aggregate is: ${aggregate.toFixed(2)}%`;
}
