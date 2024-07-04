const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => link.addEventListener('click', () => {
    const sideMenuButton = document.getElementById('side-menu');
    sideMenuButton.click();
}))