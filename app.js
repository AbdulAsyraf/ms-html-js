'use strict';

const switcher = document.querySelector('.btn');

function toggle(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme"){
        this.textContent = "Dark";
    }else {
        this.textContent = "Light";
    }

    console.log(`current class name: ${className}`);
}

switcher.addEventListener('click', toggle);

