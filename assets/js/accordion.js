const accordionContents = document.querySelectorAll('.accordion-content');

accordionContents.forEach(content => {
    let isRed = false;
    const heading = content.querySelector('.accordion-heading');
    const spanElement = heading.querySelector('span');
    const iElement = heading.querySelector('i');

    content.addEventListener('click', () => {
        if (isRed) {
            spanElement.classList.remove('red-text');
            iElement.classList.remove('red-text');
        } else {
            spanElement.classList.add('red-text');
            iElement.classList.add('red-text');
        }

        isRed = !isRed;
    });
});

const accordionItems = document.querySelectorAll('.accordion-item');
const panels = document.querySelectorAll('.panel');
const headings = document.querySelectorAll('.accordion-heading span, .accordion-heading i');

accordionItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        panels.forEach((panel, panelIndex) => {
            if (panelIndex === index) {
                panel.classList.toggle('active-panel');
            } else {
                panel.classList.remove('active-panel');
            }
        });
    });
});


// var acc = document.getElementsByClassName("accordion-content");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


