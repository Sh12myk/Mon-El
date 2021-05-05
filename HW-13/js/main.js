let currentPlanetPage = 1;
document.querySelector('.select').addEventListener('click', function setEpisode() {
    if (document.querySelector(".title") || document.querySelector(".items") || document.querySelector(".title_item")) {
        document.querySelector(".title").remove();
        document.querySelector(".items").remove();
        document.querySelector(".next").remove();
        document.querySelector(".title_items").remove();
        document.querySelector(".get_planet").remove();
    }
    let numberEpisode = document.getElementById("form_input").value;
    numberEpisode = 'https://swapi.dev/api/films/' + `${numberEpisode}` + '/';
    const episode = axios.get(numberEpisode)
        .then((episode) => {
            const people = episode.data.characters;
            for (let i = 0; i < people.length; i++){
                people[i] = people[i].replace('http', 'https');
            }
            const h1 = document.createElement('h1');
            const header = document.querySelector('.header');
            header.appendChild(h1);
            h1.classList.add('title');
            h1.textContent = episode.data.title;
            document.querySelector('.get_information').addEventListener('click', function getPeople() {
                if (document.querySelector(".title_items") || document.querySelector(".items")) {
                    document.querySelector(".items").remove();
                    document.querySelector(".next").remove();
                    document.querySelector(".title_items").remove();
                    document.querySelector(".get_planet").remove();
                }
                document.querySelector('.par').style.display = "none";
                document.querySelector('.header').style.height = "60vh";
                const titleItems = document.createElement('section');
                titleItems.classList.add('title_items');
                document.body.appendChild(titleItems);
                const h2 = document.createElement('h2');
                h2.classList.add('title_items');
                document.querySelector('.title_items').appendChild(h2);
                h2.textContent = 'Сharacters in part';
                const sectionPeople = document.createElement('section');
                sectionPeople.classList.add('items');
                sectionPeople.classList.add('info');
                document.body.appendChild(sectionPeople);
                const planetButtons = document.createElement('div');
                planetButtons.classList.add('planet_button');
                const getPlanetButton = document.createElement('button');
                getPlanetButton.classList.add('get_planet');
                getPlanetButton.classList.add('button');
                getPlanetButton.textContent = 'Get planet';
                const next = document.createElement('button');
                next.classList.add('next');
                next.classList.add('button');
                next.textContent = 'Next';
                document.querySelector('.header').appendChild(planetButtons);
                document.querySelector('.planet_button').appendChild(getPlanetButton);
                document.querySelector('.planet_button').appendChild(next);
                for (let i = 0; i < people.length; i++) {
                    axios.get(people[i])
                        .then((res) => {    
                            const article = document.createElement('article');
                            article.classList.add('people_item');
                            const h3 = document.createElement('h3');
                            const birthday = document.createElement('p');
                            const gender = document.createElement('p');
                            const genderValue = res.data.gender;
                            h3.textContent = res.data.name;
                            birthday.textContent = 'birthday: ' + res.data.birth_year;
                            const imgItem = document.createElement("img");
                            const imgItems = document.createElement("div");
                            imgItems.classList.add('image_items');
                            imgItem.classList.add('image_item');
                            article.appendChild(imgItems);
                            imgItems.appendChild(imgItem);
                            imgItem.setAttribute("src", "assets/img/" + `${res.data.name}` + '.jpg');
                            article.appendChild(h3);
                            article.appendChild(birthday);
                            const imgFemale = document.createElement("img");
                            imgFemale.setAttribute("src", "assets/img/woman.svg");
                            imgFemale.setAttribute("alt", "female");
                            const imgMale = document.createElement("img");
                            imgMale.setAttribute("src", "assets/img/man.svg");
                            imgMale.setAttribute("alt", "female");
                            const imgHerm = document.createElement("img");
                            imgHerm.setAttribute("src", "assets/img/hermaphrodite.png");
                            imgHerm.setAttribute("alt", "female");
                            if (genderValue === 'female') {
                                gender.textContent = article.appendChild(imgFemale);
                            } else if (genderValue === 'male') {
                                gender.textContent =  article.appendChild(imgMale);
                            } else if (genderValue === 'hermaphrodite') {
                                gender.textContent =  article.appendChild(imgHerm);
                            } else{
                                gender.textContent = 'gender: ' + genderValue;
                                article.appendChild(gender)
                            }
                            sectionPeople.appendChild(article);
                        })
                }
                
                function getListOfPlanet () {
                    document.querySelector(".items").remove();
                    document.querySelector(".title_items").remove();
                    axios.get('https://swapi.dev/api/planets/?page='+`${currentPlanetPage}`)
                    .then((res) => { 
                        const planet = res.data.results;
                        const titleItems = document.createElement('section');
                        titleItems.classList.add('title_items');
                        document.body.appendChild(titleItems);
                        const h2 = document.createElement('h2');
                        h2.classList.add('title_items');
                        document.querySelector('.title_items').appendChild(h2);
                        h2.textContent = 'PLANETS';
                        const sectionPlanets = document.createElement('section');
                        sectionPlanets.classList.add('items');
                        sectionPlanets.classList.add('info');
                        document.body.appendChild(sectionPlanets);
                        for (let i = 0; i < planet.length; i++) {
                            const article = document.createElement('article');
                            article.classList.add('planets_item');
                            const imgItem = document.createElement("img");
                            const imgItems = document.createElement("div");
                            imgItems.classList.add('image_items');
                            imgItem.classList.add('image_item');
                            article.appendChild(imgItems);
                            imgItem.setAttribute("src", "assets/img/" + `${planet[i].name}` + ('.png' || '.jpg' || 'jpeg'));
                            imgItems.appendChild(imgItem);
                            const h3 = document.createElement('h3');
                            h3.textContent = planet[i].name;
                            article.appendChild(h3);
                            sectionPlanets.appendChild(article);
                        }
                        if(currentPlanetPage > 5){
                            currentPlanetPage = 1;
                        } else {
                        currentPlanetPage++;
                        }
                    })
                }

                document.querySelector('.get_planet').addEventListener('click', getListOfPlanet);
                document.querySelector('.next').addEventListener('click', getListOfPlanet);
            })  
        })
});
    
