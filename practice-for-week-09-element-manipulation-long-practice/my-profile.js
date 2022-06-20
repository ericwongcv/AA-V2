// Test link by logging a message on console
console.log("This is my profile page!");

//=====================================================================================
// Phase 1A: Create and append new elements
const h1 = document.createElement("h1");
h1.innerText = "Eric Wong";
document.body.appendChild(h1);

const summary = document.createElement("p");
summary.innerText = "I am learning Full-Stack Software Engineering from App Academy.";
document.body.appendChild(summary);

const skillList = document.createElement("ul");

// const bullet1 = document.createElement("li");
// bullet1.innerText = "Javascript";
// const bullet2 = document.createElement("li");
// bullet2.innerText = "Git";
// const bullet3 = document.createElement("li");
// bullet3.innerText = "Data Structures & Algorithms";
// const bullet4 = document.createElement("li");
// bullet4.innerText = "HTML & CSS";

// skillList.appendChild(bullet1);
// skillList.appendChild(bullet2);
// skillList.appendChild(bullet3);
// skillList.appendChild(bullet4);

//=====================================================================================
// Phase 1B: refactor above code 
function createListItem(strArr) {
    strArr.forEach(str => {
        const bullet = document.createElement("li");
        bullet.innerText = str;
        skillList.appendChild(bullet);
    });
}

const fourItems = ["Javascript", "Git", "Data Structures & Algorithms", "HTML & CSS"];
createListItem(fourItems);

document.body.appendChild(skillList);

//=====================================================================================
//Phase 2: Add CSS classes and styles
function addClassName(classTagPair) {
    classTagPair.forEach(classTag => {
        const elements = document.body.getElementsByTagName(classTag[0]);
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute("class", classTag[1]);
        };
    });
}

const classTags = [['h1', 'name'], ['ul', 'my-details'], ['li', 'detail']];
addClassName(classTags);

//=====================================================================================
//Phase 3: Add clock with Date object
const clock = document.createElement("li");

function currentTime() {
    const date = new Date();
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const time = hour + ':' + minutes + ':' + seconds;
    clock.innerText = `I live in San Francisco, CA and it's currently ${time} here.`
}
currentTime();
skillList.appendChild(clock);

setInterval(currentTime, 1000);;
