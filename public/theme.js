const root = document.documentElement;
const lines = document.getElementsByClassName('lines');

function changeColors(){
    let theme = localStorage.getItem('theme');
    if(!theme)
    {
        theme = 'dark';
    }
    if(theme === 'light'){
        setDarkMode();
        localStorage.setItem('theme','dark');

    }else{
        setLightMode();
        localStorage.setItem('theme','light');
    }

}
function startUpColor(){
    let theme = localStorage.getItem('theme');
    if(!theme)
    {
        theme = 'dark';
    }
    if(theme === 'light'){
      setLightMode();
    }else{
     setDarkMode()
    }

}
function setLightMode(){
    const root = document.documentElement;
    lines[0].style.filter = 'invert()';
    lines[1].style.filter = 'invert()';
    root.style.setProperty('--body-color', 'var(--white-gray-color)');
    root.style.setProperty('--main-color', 'var(--black-color)');
    root.style.setProperty('--main-light-color', 'var(--black-color-light)');
    root.style.setProperty('--secondary-color', 'var(--white-color)');
    root.style.setProperty('--container-color', 'hsla(0, 0%, 83%, 0.84)');

}
function setDarkMode(){
    lines[0].style.filter = '';
    lines[1].style.filter = '';
    root.style.setProperty('--body-color', 'var(--black-red-color)');
    root.style.setProperty('--main-color', 'var(--white-light-color)');
    root.style.setProperty('--main-light-color', 'var(--gray-color)');
    root.style.setProperty('--secondary-color', 'var(--gray-dark-color)');
    root.style.setProperty('--container-color', 'hsla(0, 7%, 8%, 0.84)');

}

startUpColor();
