const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const slideContainer = document.querySelector('.slideContainer');
const slide = document.querySelector('.slide');

const slideWidth = slide.clientWidth;

nextButton.addEventListener('click', () => {
console.log(nextButton);
slideContainer.scrollLeft += slideWidth;
})

previousButton.addEventListener('click', () => {
    console.log(previousButton);
    slideContainer.scrollLeft -= slideWidth;
    })
    
