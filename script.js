const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => link.addEventListener('click', () => {
    const sideMenuButton = document.getElementById('side-menu');
    sideMenuButton.click();
}))

const showCompanyExperienceButtons = document.querySelectorAll('section#experience .job-info > button');
showCompanyExperienceButtons.forEach(btn => {
    const companyExperienceModal = btn.nextElementSibling;
    const closeModalButton = companyExperienceModal?.children[0];
    btn.addEventListener('click', () => companyExperienceModal.showModal());
    closeModalButton.addEventListener('click', () => companyExperienceModal.close());
})
