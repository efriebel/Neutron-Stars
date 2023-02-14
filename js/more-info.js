const moreInfo = document.querySelectorAll('.more-info')

moreInfo.forEach(link => {
    link.addEventListener('mouseenter',(e) => {

        const offsetLeftPosition = e.relatedTarget.getBoundingClientRect().left
        const linkPosition = link.getBoundingClientRect().left;
        link.nextElementSibling.style.left = `${(linkPosition - offsetLeftPosition)}px`;
    });
});