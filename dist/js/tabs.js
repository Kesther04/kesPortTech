//For use of tabs
const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content-div");
const nacter =  document.querySelector(".about-content-tab-head");
var line = document.querySelector(".about-content-tab-head .line");

function moveLine(target) {
    // Get the position and width of the selected link
    const rect = target.getBoundingClientRect();
    const left = rect.left - nacter.getBoundingClientRect().left;
    const width = target.offsetWidth + 'px';
    
    // Move the line to the selected link
    line.style.width = width;
    line.style.transform = `translateX(${left}px)`;
}

tabs.forEach((tab,index)=>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        var err = tab.classList.add('active');
        moveLine(tab);
        
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');

        
    })
});


// Initially move the line to the first link
moveLine(document.querySelector('.tab-btn.active'));
