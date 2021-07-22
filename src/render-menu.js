function renderMenu() {
    function MenuSection(heading, dishes) {
        this.heading = heading;
        this.dishes = dishes;
    }

    function Dish(name, price, picture) {
        this.name = name;
        this.price = price;
        this.picture = picture;
    }

    const mainContainer = document.querySelector('#content');
    document.body.classList.remove('body-home');

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    mainContainer.appendChild(menuContainer);

    const coffeeSection = new MenuSection('Coffee', [new Dish('Cappucino', '4$', 'https://www.pismenica.rs/wp-content/uploads/2015/10/kapucino.jpg'), new Dish('Latte', '4$', 'https://sun9-58.userapi.com/impg/dYkrh_rLM5zIz-MiQk861JsADzlyXoA0PxMf3A/Q4mIPcjBNGE.jpg?size=540x540&quality=96&sign=5acb385a5d48273eb0dee7be7886d4eb&type=album'), new Dish('Americano', '3$', 'https://www.acouplecooks.com/wp-content/uploads/2020/10/How-to-make-an-Americano-004.jpg')]);
    const teaSection = new MenuSection('Tea', [new Dish('Black', '2$', 'https://media.istockphoto.com/photos/transparent-glass-cup-of-black-tea-isolated-picture-id1018445646?k=6&m=1018445646&s=612x612&w=0&h=vJISDoLi4DlEarqNnLo7FW_id596H_c5xETzkCm9c6w='), new Dish('Green', '2$', 'https://www.verywellfit.com/thmb/7ViWi5n1cTaoGRculFnbyyxdcoA=/1989x1507/filters:fill(FFDB5D,1)/greentea-3cba398ca5fb481b972d247c7833a720.jpg')]);
    const bakerySection = new MenuSection('Bakery', [new Dish('Croissant', '3$', 'https://www.corman.pro/uploads/cache/400x400/uploads/recip/recipe/2283/dsc4113.png'), new Dish('Chocolate Cupcake', '3$', 'https://handletheheat.com/wp-content/uploads/2016/02/best-chocolate-cupcakes-recipe-SQUARE.jpg'), new Dish('Apple Turnover', '3$', 'https://www.marcellinaincucina.com/wp-content/uploads/2020/02/Apple-Turnovers-9.jpg')]);
    const sandwichSection = new MenuSection('Sandwich', [new Dish('Ham', '3$', 'https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich.jpg'), new Dish('Veg', '3$', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F12%2F06%2F2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg&q=85'), new Dish('Cheese', '3$', 'https://crumblejack.com/wp-content/uploads/2018/03/demo-sandwich.jpg')]);

    const menuSections = [coffeeSection, teaSection, bakerySection, sandwichSection];

    for (let section of menuSections) {
        const menuSection = document.createElement('div');
        menuSection.classList.add('menu-section');
        menuSection.classList.add(section.heading.toLowerCase());
        menuContainer.appendChild(menuSection);
    
        const menuSectionHeading = document.createElement('h3');
        menuSectionHeading.textContent = section.heading;
        menuSection.appendChild(menuSectionHeading);

        const menuSectionList = document.createElement('ul');
        menuSectionList.classList.add('menu-section-list');
        for (let dish of section.dishes) {
            const menuSectionItem = document.createElement('li');
            const menuItemDescription = document.createElement('span');
            menuItemDescription.classList.add('menu-item-description');
            const menuItemPicture = document.createElement('img');
            menuItemPicture.classList.add('menu-item-picture');
            menuItemPicture.src = dish.picture;
            for (let property in dish) {
                if (property != 'picture') {
                    let newDescriptionSection = document.createElement('span');
                    newDescriptionSection.classList.add(`${property}-description-text`);
                    newDescriptionSection.textContent = dish[property];
                    menuItemDescription.appendChild(newDescriptionSection);
                }
            }
            menuSectionList.appendChild(menuSectionItem);
            menuSectionItem.appendChild(menuItemPicture);
            menuSectionItem.appendChild(menuItemDescription)
        }
        menuSection.appendChild(menuSectionList);

    }
}

export {renderMenu};  