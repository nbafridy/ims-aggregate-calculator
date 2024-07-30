function calculateAggregate() {
    console.log('calculateAggregate function called');

    // Get the input values
    const testMarks = parseFloat(document.getElementById('test-marks').value);
    const interviewMarks = parseFloat(document.getElementById('interview-marks').value);
    const fscPercentage = parseFloat(document.getElementById('fsc-percentage').value);

    console.log('Test Marks:', testMarks);
    console.log('Interview Marks:', interviewMarks);
    console.log('FSc Percentage:', fscPercentage);

    // Validate inputs
    if (isNaN(testMarks) || isNaN(interviewMarks) || isNaN(fscPercentage)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate weighted scores
    const testWeighted = (testMarks / 100) * 40;
    const interviewWeighted = (interviewMarks / 10) * 10;
    const fscWeighted = (fscPercentage / 100) * 50;

    console.log('Test Weighted:', testWeighted);
    console.log('Interview Weighted:', interviewWeighted);
    console.log('FSc Weighted:', fscWeighted);

    // Calculate total aggregate
    const aggregate = testWeighted + interviewWeighted + fscWeighted;

    console.log('Aggregate:', aggregate);

    // Display result
    document.getElementById('result').innerText = `Your aggregate is: ${aggregate.toFixed(2)}%`;
}
