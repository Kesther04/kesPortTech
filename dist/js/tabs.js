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
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        var err = tab.classList.add('active');
        moveLine(tab);
        
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');

        
    })
});


// Initially move the line to the first link
moveLine(document.querySelector('.tab-btn.active'));


// for theme handler
let themeMode = document.querySelectorAll(".theme-mode");

themeMode.forEach((mode) => {
    mode.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
            
        themeMode.forEach(mode=>mode.classList.remove("active"));
        mode.classList.add("active");
    
        document.documentElement.setAttribute("data-theme",newTheme);
        localStorage.setItem("Theme",newTheme);
    });
})

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme",savedTheme);
});


// intersection observer API
let about = document.querySelector(".about");
let services = document.querySelector(".services");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
}, {threshold: 0.5});
observer.observe(about);
observer.observe(services);
observer.observe(projects);
observer.observe(contact);