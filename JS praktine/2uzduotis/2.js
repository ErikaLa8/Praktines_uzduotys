const body = document.querySelector('body');
body.innerHTML = "<div></div>";

const div = document.querySelector('div');
div.classList.add('elementS');

setTimeout(()=>{div.style.backgroundColor = "red"},3000)