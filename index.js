window.onload = function() {

    let start = document.getElementById('start');
    start.addEventListener("click", function(event){runSim();});

};

async function runSim() {
    let runCount = document.querySelector("#runCount").value;
    let calcSpeed = document.querySelector("#speed").value;
    let progress = document.querySelector("#progress");
    let changeSuccess = document.querySelector("#changeSuccess");
    let noChangeSuccess = document.querySelector("#noChangeSuccess");

    let totalChangeCorrect = 0;
    let totalNoChangeCorrect = 0;

    changeSuccess.innerHTML = "--";
    noChangeSuccess.innerHTML = "--";

    for(let i = 0; i < runCount; i++) {
        
        let correctDoor = Math.ceil(Math.random() * 3);
        let choice = 0;
        
        //change
        choice = Math.ceil(Math.random() * 3);
        if(choice != correctDoor) {
            totalChangeCorrect++;
        }

        //no change
        choice = Math.ceil(Math.random() * 3);
        if(choice == correctDoor) {
            totalNoChangeCorrect++;
        }

        //display
        changeSuccess.innerHTML = Math.round((totalChangeCorrect/(i+1)) * 100) + "%";
        noChangeSuccess.innerHTML = Math.round((totalNoChangeCorrect/(i+1)) * 100) + "%";
        progress.innerHTML = "Progress: " + (i+1) + "/" + runCount + " simulations";
        if(calcSpeed > 0) {
            await new Promise(r => setTimeout(r, calcSpeed));
        }

    }

    progress.innerHTML = "Progress: DONE!";
}