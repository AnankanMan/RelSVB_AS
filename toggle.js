const close = () => {
    const advancedMenu = document.querySelector('#searchList');
    if(advancedMenu.classList.contains('open')) { advancedMenu.classList.remove('open') }
    advancedMenu.classList.add('close');
}

const open = () => {
    const advancedMenu = document.querySelector('#searchList');
    if(advancedMenu.classList.contains('close')) { advancedMenu.classList.remove('close') }
    advancedMenu.classList.add('open');
}

const toggle = () => {
    const button = document.querySelector('#toggleButton');
    if(button.innerHTML == 'Open') {
        open();
        button.innerHTML = 'Close';
    }else{
        close();
        button.innerHTML = 'Open';
    }
}