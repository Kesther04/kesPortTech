// elements
let btns = document.querySelectorAll(".projects-selector .btn");
let projectsContainer = document.querySelector(".projects-box");


// to handle the btn project navigation
btns.forEach(btn => btn.addEventListener('click',(e)=>{

    btns.forEach(item => item.classList.remove('active'));
    if (btn == e.target) {
        btn.classList.add('active');
    }
    
    if (e.target.value == "tech") {
        //to fetch data from tech.json    
        fetchedData('./dist/js/json/tech.json','tech');
    }
    else if (e.target.value == "copy") {

        // to fetch data from copy.json
        fetchedData('./dist/js/json/copy.json','copy');
    }
    
}));

// page onload handler
window.onload = () => {
    fetchedData('./dist/js/json/tech.json','tech');
}

// Function for Fetching Data
const fetchedData = (link,type) => {
    fetch(link).then(response => response.json()).then(
        (data) => {

            projectsContainer.replaceChildren();
            
            // To Generate Random Values
            let varr = [];
            let carr = [];
            for (let i = 0; i < data.projects.length; i++) {
                varr.push(i);
            }

            for (let i = 1; i <= 5; i++) {
                const randomIndex = Math.floor(Math.random()*varr.length)
                carr.push(varr[randomIndex])
                varr.splice(randomIndex,1);
            }
            
            
            // To map through fetched data  and display according to random generated values
            data.projects.map((item,index) => {
                carr.map((citm) => {
                    if (citm == index) {
                        
                        let content = document.createElement('div');
                        content.setAttribute('class','projects-content');
    
                        let contentImg = document.createElement('div');
                        contentImg.setAttribute('class','projects-content-img');
                        
                        let img = document.createElement('img');
                        let imgItem = [];
                        for (let i = 0; i < item.img.length; i++) {
                            imgItem.push(item.img[i]);                        
                        }

                        let imgRand = Math.floor(Math.random()*item.img.length);

                        if (type == "tech") {
                            img.setAttribute('src',`./dist/img/codeImg/${imgItem[imgRand]}`);    
                        }else if (type == "copy") {
                            img.setAttribute('src',`./dist/img/copyImg/${imgItem[imgRand]}`);
                        }

                        
                        img.setAttribute('alt',`${item.name}`);

                        let contentDiv = document.createElement('div');
                        contentDiv.setAttribute('class','projects-content-txt');
                        
                        let contentDivP = document.createElement('p');
                        contentDivP.innerText = item.text;

                        contentDiv.appendChild(contentDivP);  

                        let linkHolder = document.createElement('div');
                        
                        item.link.map((link) => {
                            let contentDivBtn = document.createElement('button');
                            let contentDivA = document.createElement('a');
                            contentDivA.setAttribute('href',link.hlink);
                            contentDivA.innerHTML = link.desc;
                            contentDivBtn.appendChild(contentDivA);
                            linkHolder.appendChild(contentDivBtn);
                        });

                        contentDiv.appendChild(linkHolder);  
                        contentImg.appendChild(img);
                        contentImg.appendChild(contentDiv);
                        content.appendChild(contentImg);
                        projectsContainer.appendChild(content);
                               
                    }
                
                }); 
                    
            });           
        }
    );
}