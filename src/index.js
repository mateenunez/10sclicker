var clicks = 0;
var size = 10;
var seg = 00;
var time;

const clock = document.getElementById('timer');
const button = document.createElement('button');
const clicktext = document.createElement('h2');


button.innerText = 'Click Me!';
document.body.append(button);


clicktext.innerText = `${clicks}`;
document.body.append(clicktext);



button.addEventListener('click', () => {
    
    clicktext.innerText = `${++clicks}`;
    if (clicks === 1){time = setInterval(()=>{
        clock.innerHTML = `00:${++seg}`
    }, 1000)};

    if (clicks === 78 || clicks === 86 || clicks === 22)
    {clicktext.style = `color: #F3EC1B`
    } else {clicktext.style = `color: #4783AF`}
    
    if (seg===10){
        button.disabled = true;
        button.innerText = 'TIEMPO AGOTADO';
        clearInterval(time);

        var endtext = document.createElement('h3');
        endtext.innerText = `Clicks en 10 segundos: ${clicks}`;
    }
})

