const moreInfo = document.querySelectorAll('.more-info')

moreInfo.forEach(link => {
    link.addEventListener('mouseenter',(e) => {

        const offsetLeftPosition = e.relatedTarget.getBoundingClientRect().left
        const linkPosition = link.getBoundingClientRect().left;
        link.nextElementSibling.style.left = `${(linkPosition - offsetLeftPosition)}px`;
    });
});

//need solution for mobile breakpoints!
//issue: if aligned to left, more info gets pushed out of frame,
//need more info content to be centered to screen width
//how?? >> to mid-day WEDNESDAY 15.02.