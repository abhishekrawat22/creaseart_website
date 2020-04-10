// Display and hide contact us form on click of the phone icon.
let contactIcon = document.getElementById('contact_icon');
let contactUs = document.getElementById('contact-section');
let crossIcon = document.getElementById('cross');

contactUs.style.display = 'none';

contactIcon.onclick = () => {
    contactUs.style.display = 'block';
    contactUs.classList.add('slideIn');
    contactIcon.style.display = 'none';
}

crossIcon.onclick = () => {
    contactUs.style.display = 'none';
    contactIcon.style.display = 'block';
}