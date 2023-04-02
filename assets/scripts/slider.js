let sliderContainer = document.getElementById('orderSection__shemeSliderContainer');


function slide() {
let firstBlock = sliderContainer.children[0];
sliderContainer.removeChild(firstBlock);
sliderContainer.appendChild(firstBlock);
}

setInterval(slide, 2000);