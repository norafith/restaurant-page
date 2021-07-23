function renderAbout() {
    function UserReview(name, icon, phoneNumber, position) {
        this.name = name;
        this.icon = icon;
        this.phoneNumber = phoneNumber;
        this.position = position;
    }
 
    const mainContainer = document.querySelector('#content');
    document.body.classList.remove('body-home');

    const headingText = document.createElement('h3');
    headingText.textContent = 'Our team';
    headingText.classList.add('content-heading-text');
    mainContainer.appendChild(headingText);

    const teamMembersContainer = document.createElement('div');
    teamMembersContainer.setAttribute('id', 'team-members-container');
    mainContainer.appendChild(teamMembersContainer);

    let helenBlock = new UserReview('Helen', 'https://image.flaticon.com/icons/png/512/2922/2922743.png', '123-456-7890', 'Manager');
    let markBlock = new UserReview('Mark', 'https://image.flaticon.com/icons/png/512/2922/2922722.png', '123-456-7890', 'Barista');
    let johnBlock = new UserReview('John', 'https://image.flaticon.com/icons/png/512/2922/2922539.png', '123-456-7890', 'Owner');
    let annBlock = new UserReview('Ann', 'https://image.flaticon.com/icons/png/512/2922/2922753.png', '123-456-7890', 'Barista');


    const teamMembersList = [helenBlock, markBlock, johnBlock, annBlock];
    for (let teamMember of teamMembersList) {
        const teamMemberBlock = document.createElement('div');
        teamMemberBlock.classList.add('team-member');
        teamMembersContainer.appendChild(teamMemberBlock);

        const teamMemberIcon = document.createElement('img');
        teamMemberIcon.classList.add('team-member-picture');
        teamMemberIcon.src = teamMember.icon;
        teamMemberBlock.appendChild(teamMemberIcon);

        const teamMemberName = document.createElement('span');
        teamMemberName.classList.add('team-member-name');
        teamMemberName.textContent = teamMember.name;
        teamMemberBlock.appendChild(teamMemberName);

        const teamMemberPhone = document.createElement('span');
        teamMemberPhone.classList.add('team-member-phone');
        teamMemberPhone.textContent = teamMember.phoneNumber;
        teamMemberBlock.appendChild(teamMemberPhone);

        const positionText = document.createElement('span');
        positionText.classList.add('team-position-text');
        positionText.textContent = teamMember.position;
        teamMemberBlock.appendChild(positionText);

    }

    const aboutUsHeadingText = document.createElement('h3');
    aboutUsHeadingText.textContent = 'About Us';
    mainContainer.appendChild(aboutUsHeadingText);

    const aboutUsText = document.createElement('p');
    aboutUsText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius. Nisl vel pretium lectus quam id. Sed blandit libero volutpat sed cras ornare arcu. Nisi est sit amet facilisis magna etiam tempor orci eu. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Viverra vitae congue eu consequat ac. Odio ut sem nulla pharetra diam sit amet nisl. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate odio ut enim blandit. Pretium fusce id velit ut tortor pretium viverra suspendisse. Nibh cras pulvinar mattis nunc sed blandit libero. In fermentum et sollicitudin ac orci phasellus. Arcu cursus euismod quis viverra nibh cras. Nisi lacus sed viverra tellus in hac habitasse. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Posuere morbi leo urna molestie at elementum eu facilisis. Tellus molestie nunc non blandit massa enim nec dui. Vitae et leo duis ut diam. Enim tortor at auctor urna nunc id cursus. Morbi tempus iaculis urna id volutpat. Varius morbi enim nunc faucibus a pellentesque sit. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eu volutpat odio facilisis mauris sit amet massa. Cras sed felis eget velit aliquet sagittis id. A lacus vestibulum sed arcu non odio euismod. Lectus mauris ultrices eros in. Purus in massa tempor nec feugiat nisl pretium fusce id.';
    mainContainer.appendChild(aboutUsText);

}


export {renderAbout};