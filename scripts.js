function calculateAggregate() {
    // Get the input values
    const testMarks = parseFloat(document.getElementById('test-marks').value);
    const interviewMarks = parseFloat(document.getElementById('interview-marks').value);
    const fscMarks = parseFloat(document.getElementById('fsc-marks').value);

    console.log('Test Marks:', testMarks);
    console.log('Interview Marks:', interviewMarks);
    console.log('FSc Marks:', fscMarks);

    // Validate inputs
    if (isNaN(testMarks) || isNaN(interviewMarks) || isNaN(fscMarks)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate weighted scores
    const testWeighted = (testMarks / 100) * 40;
    const interviewWeighted = (interviewMarks / 10) * 40;
    const fscWeighted = (fscMarks / 1100) * 50;

    // Calculate total aggregate
    const aggregate = testWeighted + interviewWeighted + fscWeighted;

    // Display result
    document.getElementById('result').innerText = `Your aggregate is: ${aggregate.toFixed(2)}%`;
}
