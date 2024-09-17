const button = document.querySelector('#btn');
const box = document.querySelector('#box');

function DisplayBox() {
    if(box.style.display === 'block'){
        box.style.height = '150px';
        box.style.width = '150px';
        box.style.backgroundColor = 'yellow';
        box.style.display = 'none';
        button.textContent = 'הצג ריבוע';
    }
    else{
        box.style.height = '150px';
        box.style.width = '150px';
        box.style.backgroundColor = 'yellow';
        box.style.display = 'block';
        button.textContent = 'הסתר ריבוע';
    }}



button.addEventListener('click', DisplayBox);
console.log(button);

async function getName() {
    try{
    const data = await fetch('https://randomuser.me/api/')
    const jsonData = await data.json()
    document.querySelector('#name').textContent = `${jsonData.results[0].name.first} ${jsonData.results[0].name.last}`
    }
    catch(error){
        console.log(error)
}
}
getName();

