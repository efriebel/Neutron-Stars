const moreInfo = document.querySelectorAll('.more-info')
const moreInfoContent = document.querySelectorAll('.more-info-content');

moreInfo.forEach(link => {
    link.addEventListener('mouseenter',(e) => {

        const linkPosition = link.getBoundingClientRect();
        link.nextElementSibling.style.left = `${linkPosition.left}px`;
    });
});