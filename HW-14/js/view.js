
const buttonUp = document.createElement('button');
buttonUp.classList.add('btn');
buttonUp.setAttribute("id", "up");
buttonUp.textContent= 'Up'
                document.body.appendChild(buttonUp);
const buttonDown = document.createElement('button');
buttonDown.classList.add('btn');
buttonDown.setAttribute("id", "down");
buttonDown.textContent='Down'
                document.body.appendChild(buttonDown);
const buttonGenerator = document.createElement('button');
buttonGenerator.classList.add('btn');
buttonGenerator.setAttribute("id", "generator");
buttonGenerator.textContent='Generate id'
                document.body.appendChild(buttonGenerator);
const uList = document.createElement('ul');
uList.classList.add('list');
                document.body.appendChild(uList);