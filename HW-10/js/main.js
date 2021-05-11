
function generateBlocks (){
  for (let i = 0; i < 25;i++ ) {
    const div = document.createElement('div'); 
    div.setAttribute("id" , "new" + i);
    div.setAttribute("class" , "block");
    document.body.appendChild(div);
  }
  document.querySelectorAll('.block').forEach(e => e.style.backgroundColor = getRandomColor());
}
function getRandomColor(){
  const r = () => {return Math.floor(Math.random()*10)};
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
function generateBlocksInterval(){
  setInterval(() => {
    document.querySelectorAll('.block').forEach(e => e.style.backgroundColor = getRandomColor());
}, 1000);
}
module.exports = {
  generateBlocks,
  getRandomColor,
  generateBlocksInterval

}
