import {renderHome} from './render-home';
import {renderMenu} from './render-menu';
import {renderAbout} from './render-about';

function createNav() {
    const mainContainer = document.querySelector('#content');
    document.body.classList.remove('body-home');
    
    const navBlock = document.createElement('nav');
    document.body.insertBefore(navBlock, mainContainer);
    
    const navSectionsText = ['Home', 'Menu', 'About'];        
    const navSectionsList = document.createElement('ul');
    navSectionsList.setAttribute('id', 'nav-list');

    const navHomeSection = document.createElement('h1');
    navHomeSection.textContent = 'Saturn Coffee';
    navHomeSection.setAttribute('id', 'nav-title');
    navBlock.appendChild(navHomeSection);

    navBlock.appendChild(navSectionsList);

    for (let item of navSectionsText) {
        let navSectionsItem = document.createElement('li');
        navSectionsItem.addEventListener('click', (e) => {
            mainContainer.querySelectorAll("*").forEach(element => {
                try {
                    mainContainer.removeChild(element);
                } catch (DOMException) {
                    // pass
                }
            })
        });

        navSectionsItem.addEventListener('click', (e) => {
            navBlock.querySelectorAll('li').forEach(element => {
                element.classList.remove('active-nav-section');
            });
            e.target.classList.add('active-nav-section');
        });

        if (item == 'Home') {
            navSectionsItem.addEventListener('click', renderHome);
        } else if (item == 'Menu') {
            navSectionsItem.addEventListener('click', renderMenu);
        } else if (item == 'About') {
            navSectionsItem.addEventListener('click', renderAbout);
        }

        navSectionsItem.textContent = item;
        navSectionsItem.classList.add('nav-section');
        navSectionsItem.classList.add(`${item.toLowerCase()}-nav-section`);

        navSectionsList.appendChild(navSectionsItem);
    }
    
    navBlock.querySelector('.home-nav-section').click();    
}

export {createNav};
