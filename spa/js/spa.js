let mainContainer = document.querySelector("#portfolio-container");
let classHeaderContainer = document.querySelector("#class-header");
let getStartedMsg = document.querySelector("#get-started");
let img = document.getElementById("home-image");

function loadData(inClass) {

    let request = new XMLHttpRequest();

    request.open("GET", "js/spa-data.json", true);

    request.onreadystatechange = function() {

        if (request.readyState == 4 && request.status == 200) {

            classHeaderContainer.innerHTML = "";
            getStartedMsg.style.display = 'none';
            img.style.display = "none";

            let classHeader = document.createElement("h1");
                classHeader.innerHTML = inClass + " " + "PROJECTS";
                classHeaderContainer.appendChild(classHeader);

            mainContainer.innerHTML = "";

            //returns JSON array containing all objects
            let data = JSON.parse(this.responseText);

            const dataParse = data.data;

            for (let i = 0; i < dataParse.length; i++) {
                const project = dataParse[i];
                
                console.log(project);

                if (project.class == inClass) {
                    //create div for each project
                    let projectContainer = document.createElement("div");
                    projectContainer.className = "project-container";
                    //create img element that pulls pathname from json
                    let projectIMG = document.createElement("img");
                    projectIMG.setAttribute("src", project.img);
                    projectIMG.className = "project-img";
                    projectContainer.appendChild(projectIMG);
                    //create project name h3 element
                    let projectName = document.createElement("h3");
                    projectName.className = "project-name";
                    projectName.innerHTML = project.projectName;
                    projectContainer.appendChild(projectName);
                    //create skills used p element
                    let skillsUsed = document.createElement("p");
                    skillsUsed.innerHTML = "Skills used: " + project.skills;
                    projectContainer.appendChild(skillsUsed);
                    //create link for site
                    let siteLink = document.createElement("a");
                    siteLink.setAttribute("href", project.url);
                    siteLink.setAttribute("target", "_blank");
                    projectContainer.appendChild(siteLink);
                    //create button for link
                    let button = document.createElement("button");
                    button.className = "cta-button";
                    button.innerHTML = "View Site";
                    siteLink.appendChild(button);
                    //projectContainer.innerHTML = project.class;
                    mainContainer.appendChild(projectContainer);
                }
                
            }
            //console.log(dataParse[0]);

            //document.getElementById('portfolio-container').innerHTML = this.responseText;
        }
    }

    request.send();
}

const returnToHome = () => {
    mainContainer.innerHTML = "";
    classHeaderContainer.innerHTML = "";
    getStartedMsg.style.display = "block";
    img.style.display = "block";
}



document.getElementById("wdv101").addEventListener('click', function() {
    loadData("WDV101");
});

document.getElementById("wdv205").addEventListener('click', function() {
    loadData("WDV205");
});

document.getElementById("wdv321").addEventListener('click', function() {
    loadData("WDV321");
});
document.getElementById("wdv341").addEventListener('click', function() {
    loadData("WDV341");
});

document.getElementById("home").addEventListener('click', returnToHome);





