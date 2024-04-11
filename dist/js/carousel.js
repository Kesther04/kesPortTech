let timeRunning = 1000;
let timeAutoNext = 7000;
let runTimeOut;
function next(e) {
    let nextBtn = e;
    let carousel = e.parentElement.parentElement;
    let listItem = e.parentElement.parentElement.children[0];
    let thumbNail = e.parentElement.parentElement.children[2];

           
    let runAutoRun = setTimeout(()=>{
        nextBtn.click();
    }, timeAutoNext);

    showSlider("next");
    function showSlider(type){
        let itemSlider = e.parentElement.parentElement.children[0].querySelectorAll('.item');
        let itemThumbnail = e.parentElement.parentElement.children[2].querySelectorAll('.item');

        if(type === "next"){
            listItem.appendChild(itemSlider[0]);
            thumbNail.appendChild(itemThumbnail[0]);
            carousel.classList.add("next");
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(()=>{
            carousel.classList.remove("next");
            carousel.classList.remove("prev");
        }, timeRunning);

        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(()=>{
            nextBtn.click();
        }, timeAutoNext);
    }
}

function prev(e) {
    let prevBtn = e;
    let carousel = e.parentElement.parentElement;
    let listItem = e.parentElement.parentElement.children[0];
    let thumbNail = e.parentElement.parentElement.children[2];


    showSlider("prev");
    function showSlider(type){
        let itemSlider = e.parentElement.parentElement.children[0].querySelectorAll('.item');
        let itemThumbnail = e.parentElement.parentElement.children[2].querySelectorAll('.item');

        if(type === "prev"){
            let positionLastItem = itemSlider.length - 1;
            listItem.prepend(itemSlider[positionLastItem]);
            thumbNail.prepend(itemThumbnail[positionLastItem]);
            carousel.classList.add("prev");
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(()=>{
            carousel.classList.remove("next");
            carousel.classList.remove("prev");
        }, timeRunning);

    }
}