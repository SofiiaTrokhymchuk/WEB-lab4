function changeDrawingBgColor(){
    const drawingListItem = document.getElementById('list-item-drawing');
    let isClickedTheFirstTime = true;
    drawingListItem.onclick = function(){
        if(isClickedTheFirstTime){
            drawingListItem.classList.remove('drawing-bg-second-click');
            drawingListItem.classList.add('drawing-bg-first-click');
            isClickedTheFirstTime = false;
        }else{
            drawingListItem.classList.remove('drawing-bg-first-click');
            drawingListItem.classList.add('drawing-bg-second-click');
            isClickedTheFirstTime = true;
        }
        
    }
}

function changePhotographingBgColor(){
    const photographingListItem = document.querySelector('.list-item-photographing');
    let isClickedTheFirstTime = true;
    photographingListItem.onclick = function(){
        if(isClickedTheFirstTime){
            photographingListItem.classList.remove('photographing-bg-second-click');
            photographingListItem.classList.add('photographing-bg-first-click');
            isClickedTheFirstTime = false;
        }else{
            photographingListItem.classList.remove('photographing-bg-first-click');
            photographingListItem.classList.add('photographing-bg-second-click');
            isClickedTheFirstTime = true;
        }
    }
}

function imageButtonsHandler(){
    const imageContainer = document.querySelector('.img-container');

    document.getElementById('add-img').onclick = function(){
        if(document.getElementById('img-original') === null){
            imageContainer.firstElementChild.insertAdjacentHTML('beforeend', 
            `
                <img id="img-original" 
                class="city-img" 
                src="https://media.slovoidilo.ua/media/publications/16/153917/153917-1_large.jpg" 
                alt="Kyiv Image">
            `);
        }else{
            imageContainer.insertAdjacentHTML('beforeend', 
            `
                <img class="city-img copy" 
                src="https://media.slovoidilo.ua/media/publications/16/153917/153917-1_large.jpg" 
                alt="Kyiv Image">
            `);
        }
    }

    document.getElementById('enlarge-img').onclick = function(){
        const image = document.getElementById('img-original');
        image.style.width = (image.width + 50) + 'px';
    }

    document.getElementById('reduce-img').onclick = function(){
        const image = document.getElementById('img-original');
        image.style.width = (image.width - 50) + 'px';
    }

    document.getElementById('delete-img').onclick = function(){
        if(document.querySelector('.copy') !== null){
            document.querySelectorAll('.copy').forEach(img => img.remove());
        }
        if(document.getElementById('img-original') !== null){
            document.getElementById('img-original').remove();
        }
    }
}

function main(){
    changeDrawingBgColor();
    changePhotographingBgColor();
    imageButtonsHandler();
    imageButtonsHandler();
}

main();
