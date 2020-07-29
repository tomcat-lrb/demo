function createBubble() {
    const body = document.querySelector('body');
    const createElement = document.createElement('h6');
    var size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    body.appendChild(createElement);

    setTimeout(() =>{
        createElement.remove()
    },4000)
}

setInterval(createBubble,50)