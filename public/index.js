const button = document.querySelector('.menu');
console.log(button)

const links = document.querySelector('.links');

button.addEventListener('click', ()=>{
    console.log(links.classList)
    if (links.classList.contains('show-menu')) {
        links.classList.remove('show-menu');    
        console.log('menu is there')
    } else {
        links.classList.add('show-menu');
        console.log('menu is not there')
    }
})

const text = ['I am a...','Front End Developer', 'UX Designer', 'Marketer', 'A/B Tester', 'Entrepreneur', 'and more...'];

const textArea = document.querySelector('#mainText');
var i = 0;
setTimeout(() => {
    setInterval(() => {
        textArea.textContent = text[i];
        if(i <= text.length){
            i++;
        } else {
            i=0;
        }
    }, 1000);
}, 3000);