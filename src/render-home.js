function renderHome() {
    function InfoField(label, value) {
        this.label = label;
        this.value = value;
    }

    const mainContainer = document.querySelector('#content');
    document.body.classList.add('body-home');

    const headingTextContainer = document.createElement('div');
    headingTextContainer.setAttribute('id', 'heading-text-container');
    mainContainer.appendChild(headingTextContainer);

    const mainHeadingText = document.createElement('h1');
    mainHeadingText.textContent = 'The best coffee you\'ve ever tasted.';
    const secondaryHeadingText = document.createElement('h3');
    secondaryHeadingText.textContent = 'Working since 1979.';
    headingTextContainer.appendChild(mainHeadingText);
    headingTextContainer.appendChild(secondaryHeadingText);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    mainContainer.appendChild(infoContainer);
    const labelContainer = document.createElement('div');
    labelContainer.classList.add('home-info-secondary-container');
    infoContainer.appendChild(labelContainer);
    const valueContainer = document.createElement('div');
    valueContainer.classList.add('home-info-secondary-container');
    infoContainer.appendChild(valueContainer);

    let workingHoursField = new InfoField('Working hours: ', '08:00 - 20:00');
    let addressField = new InfoField('Address: ', '221b Baker Street, London');
    let emailField = new InfoField('Email: ', 'not-exist@site.com');
    const fields = [workingHoursField, addressField, emailField];

    for (let field of fields) {
        let fieldLabelText = document.createElement('span');
        fieldLabelText.textContent = field.label;
        labelContainer.appendChild(fieldLabelText);

        let fieldValueText = document.createElement('span');
        fieldValueText.textContent = field.value;
        valueContainer.appendChild(fieldValueText);
    }

}

export {renderHome};