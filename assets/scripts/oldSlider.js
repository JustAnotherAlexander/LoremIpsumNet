    let sliderContainer = document.getElementById('orderSection__shemeSliderContainer');
    let leftArrow = document.querySelector('.orderSection__shemeSliderLeftArrow');
    let rightArrow = document.querySelector('.orderSection__shemeSliderArrow');
    let i = 0;
    rightArrow.addEventListener('click', ()=> { 
        if (i === (sliderContainer.children.length)) {
            i = 0;
        }
        next(i);
         i+=1;
        
        });
    leftArrow.addEventListener('click', ()=> { 
        if (i < 0) {
            i = sliderContainer.children.length-1;
        }
        prew(i);
         i-=1;
        });
    

    function next(i) {

            if (i !== (sliderContainer.children.length - 1)) {
                sliderContainer.children[i].classList.toggle('hidden');
                sliderContainer.children[i+1].classList.toggle('hidden');
                return;
            } else {
                sliderContainer.children[i].classList.toggle('hidden'); 
                sliderContainer.children[0].classList.toggle('hidden'); 
                return;
            }
    }

    function prew(i) {

        if (i !== 0) {
            sliderContainer.children[i].classList.toggle('hidden');
            sliderContainer.children[i-1].classList.toggle('hidden');
            return;
        } else {
            sliderContainer.children[0].classList.toggle('hidden'); 
            sliderContainer.children[sliderContainer.children.length-1].classList.toggle('hidden'); 
            return;
        }
    }
