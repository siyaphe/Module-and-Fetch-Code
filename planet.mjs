//URL to fetch data
// let request = "https://swapi.dev/api/planets"


//function to fetch data

export async function malia() {
    fetch("https://swapi.dev/api/planets")
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        json.results.forEach((element,index) => {
            let planContainer = document.querySelector(".planContainer");
            let newPlan = document.createElement('div');
            newPlan.setAttribute("class", "planets");
            newPlan.innerHTML = element.name;
            planContainer.appendChild(newPlan);

        })
    })
}
