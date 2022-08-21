function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML = value;

    const fillBoxRange = document.getElementById('fillRangeValue');

    fillBoxRange.style.width = + value + "%";
    fillBoxRange.style.background = 'linear-gradient(to right, hsl(189, 44%, 61%), hsl(189, 89%, 29%)';
}