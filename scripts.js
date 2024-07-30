function calculateAggregate() {
    // Get the input values
    const testMarks = parseFloat(document.getElementById('test-marks').value);
    const interviewMarks = parseFloat(document.getElementById('interview-marks').value);
    const fscPercentage = parseFloat(document.getElementById('fsc-percentage').value);

    // Validate inputs
    if (isNaN(testMarks) || isNaN(interviewMarks) || isNaN(fscPercentage)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate weighted scores
    const testWeighted = (testMarks / 100) * 40;
    const interviewWeighted = (interviewMarks / 10) * 10;
    const fscWeighted = (fscPercentage / 100) * 50;

    // Calculate total aggregate
    const aggregate = testWeighted + interviewWeighted + fscWeighted;

    // Display result
    document.getElementById('result').innerText = `Your aggregate is: ${aggregate.toFixed(2)}%`;
}
