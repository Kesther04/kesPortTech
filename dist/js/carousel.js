let carousel = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbNail = document.querySelector(".carousel .thumbnail");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = function () {
    showSlider("next");
}

prevBtn.onclick = function () {
    showSlider("prev");
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextBtn.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = listItem.querySelectorAll('.item');
    let itemThumbnail = thumbNail.querySelectorAll('.item');

    if(type === "next"){
        listItem.appendChild(itemSlider[0]);
        thumbNail.appendChild(itemThumbnail[0]);
        carousel.classList.add("next");
    }else{
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

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextBtn.click();
    }, timeAutoNext);
}