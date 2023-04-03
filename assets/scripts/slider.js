let sliderContainer = document.getElementById('orderSection__sheme');
let i = 0;


function slide(i) {

        if (i === 0) {
            let prewBlock = sliderContainer.children[sliderContainer.children.length-2];
            prewBlock.classList.remove('scaled');
            let currentBlock = sliderContainer.children[i];
            currentBlock.classList.add('scaled');
            i+=2;
            return;
        }

        if (i > 0) {
            //sliderContainer.removeChild(firstBlock);
            let prevBlock = sliderContainer.children[i-2];
            prevBlock.classList.remove('scaled');
            
            let currentBlock = sliderContainer.children[i];
            currentBlock.classList.add('scaled');

            
            
        }
    
        

}

setInterval(()=>{ 
    slide(i);
     i+=2;
     if (i === sliderContainer.children.length) 
     i = 0;
    }, 2000);