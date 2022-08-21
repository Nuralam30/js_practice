
const starIcon = document.querySelectorAll('.fa-star');

starIcon.forEach(icon => {
    icon.addEventListener('click', function(){
        icon.style.color = 'yellow'
    })
});

console.log(starIcon)