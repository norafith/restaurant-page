const mainContainer = document.querySelector('#content');
function createNav() {
    const navBlock = document.createElement('nav');
    navBlock.textContent = 'Helloooooooooo';

    mainContainer.appendChild(navBlock);
}

export {createNav};
