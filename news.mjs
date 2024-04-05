// this is the URL I want to retrieve or fetch data from

// let request = "https://swapi.dev/api/people/1/"


//function call to retrieve data and display 
export async function mySprints() {
    fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        json.results.forEach((element,index) => {
            let newContainer = document.querySelector(".newContainer");
            let newPeople = document.createElement('div');
            // let height = document.createElement('div');
            // let mass = document.createElement('div');
            // let hair_color = document.createElement('div');
            // let skin_color = document.createElement('div');
            // let eye_color = document.createElement('div');
            // let birth_year = document.createElement('div');
            // let gender = document.createElement('div');
            newPeople.setAttribute("class","people");
            // height.setAttribute("class","people");
            // mass.setAttribute("class","people");
            // hair_color.setAttribute("class","people");
            // skin_color.setAttribute("class","people");
            // eye_color.setAttribute("class","people");
            // birth_year.setAttribute("class","people");
            // gender.setAttribute("class", "people");
            newPeople.innerHTML = element.name;
            // height.innerHTML = element.height;
            // mass.innerHTML = element.mass;
            // hair_color.innerHTML = element.hair_color;
            // skin_color.innerHTML = element.skin_color;
            // eye_color.innerHTML = element.eye_color;
            // birth_year.innerHTML = element.birth_year;
            // gender.innerHTML = element.gender;
            newContainer.appendChild(newPeople);
            // newContainer.appendChild(height);
            // newContainer.appendChild(mass);
            // newContainer.appendChild(hair_color);
            // newContainer.appendChild(skin_color);
            // newContainer.appendChild(eye_color);
            // newContainer.appendChild(birth_year);
            // newContainer.appendChild(gender);

        

         

        });
    });
}

