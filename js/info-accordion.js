document.querySelectorAll('.arrow-info-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const accordionContent = button.nextElementSibling;

        button.closest('.lc-container-medium').classList.toggle('arrow-info-button-active');

        button.classList.toggle('arrow-info-button-active');

        if (button.classList.contains('arrow-info-button-active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});