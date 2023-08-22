const accordionItems = document.querySelectorAll('.accordion-item');
const panels = document.querySelectorAll('.panel');
const headings1 = document.querySelectorAll('.accordion-heading span, .accordion-heading i');

accordionItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        panels.forEach((panel, panelIndex) => {
            if (panelIndex === index) {
                panel.classList.toggle('active-panel');
            } else {
                panel.classList.remove('active-panel');
            }
            headings1.forEach(c=>{
                c.classList.remove("red-text");
            })
        const headings = item.querySelectorAll('.accordion-heading span, .accordion-heading i');
            headings.forEach(b=>{
                b.classList.add("red-text");
            })
        });   
    });
});
