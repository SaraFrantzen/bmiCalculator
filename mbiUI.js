const  calculateBMI = () => {
	let  weightInput = document.getElementById("weight")
    let  heightInput = document.getElementById("height")
    let  results = calculateMetricBMI(weightInput.value, heightInput.value)
    let  displayResultsElement = document.getElementById('results')
        if (results < 18.5) {
            displayResultsElement.innerHTML = `<h1> Your BMI value is: ${results}, youre underweight</h1>`
        } else if (results > 18.5 && results < 25) {
            displayResultsElement.innerHTML = `<h1> Your BMI value is: ${results}, youre normal weight</h1>`
        } else if (results > 25 && results < 30) {
            displayResultsElement.innerHTML = `<h1> Your BMI value is: ${results}, youre  overweight</h1>`
        } else {
            displayResultsElement.innerHTML = `<h1> Your BMI value is: ${results}, youre  obese</h1>`
        }
}