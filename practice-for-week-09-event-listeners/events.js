// Your code here

// When the DOM is loaded, alert the user that the DOM has loaded.
window.addEventListener("DOMContentLoaded", event => {
    console.log("The DOM has loaded.");
});


// When the #red-input input contains the word "red", change the background 
// color of the input to red. Otherwise, remain transparent.

function redSection() {
    const input = document.getElementById("red-input");
    const section = document.getElementById("section-1");
    if (input.value === "red") {
        section.style.backgroundColor = "red";
    } else {
        section.style.backgroundColor = "transparent";
    }
}

window.addEventListener("DOMContentLoaded", event => {
    const input = document.getElementById("red-input");
    input.addEventListener("input", redSection);
});


// When #add-item is pressed, a new <li> element with the value from #list-add 
// is created and appended to the <ul>.

function listAdd() {
    const ul = document.getElementsByTagName("ul")[0];
    const value = document.getElementById("list-add").value;
    const li = document.createElement("li");
    li.innerText = value;
    document.getElementById("list-add").value = "";
    ul.appendChild(li);
}

window.addEventListener("DOMContentLoaded", event => {
    const button = document.getElementById("add-item")
    button.addEventListener("click", listAdd);
})


// When a new color is selected in #color-select, change the background color 
// of the <section> it belongs to.

function bgColorChange() {
    const input = document.getElementById("color-select");
    const section = document.getElementById("section-3");
    section.style.backgroundColor = `${input.value}`;
}

window.addEventListener("DOMContentLoaded", event => {
    const input = document.getElementById("color-select");
    input.addEventListener("input", bgColorChange);
});


// When #remove-listeners is clicked, all event listeners from the previous 
// three sections should be removed.

window.addEventListener("DOMContentLoaded", event => {
    const button = document.getElementById("remove-listeners");
    
    button.addEventListener("click", event => {
        const sectionOneInput = document.getElementById("red-input");
        const sectionTwoButton = document.getElementById("add-item");
        const sectionThreeInput = document.getElementById("color-select");

        sectionOneInput.removeEventListener("input", redSection);
        sectionTwoButton.removeEventListener("click", listAdd);
        sectionThreeInput.removeEventListener("input", bgColorChange);
    });
});


// Create a button that re-adds the event listeners removed by the last task from #part-4.

window.addEventListener("DOMContentLoaded", event => {
    const button = document.getElementById("re-add-listeners");
    
    button.addEventListener("click", event => {
        const sectionOneInput = document.getElementById("red-input");
        const sectionTwoButton = document.getElementById("add-item");
        const sectionThreeInput = document.getElementById("color-select");

        sectionOneInput.addEventListener("input", redSection);
        sectionTwoButton.addEventListener("click", listAdd);
        sectionThreeInput.addEventListener("input", bgColorChange);
    });
});


// Create a new section that contains a <div> and a hover event that adds text to the <div> 
// indicating that it is being hovered over.

window.addEventListener("DOMContentLoaded", event => {
    const section = document.getElementById("section-6");
    const p = document.getElementById("hover");

    section.addEventListener("mouseover", event => {
        p.innerText = "Currently Hovering Over!!";
    });
    section.addEventListener("mouseleave", event => {
        p.innerText = "Not Hovering Over..";
    });
});


//Create a global event listener that alerts the user whenever the space bar is pressed.

window.addEventListener("DOMContentLoaded", event => {
    document.body.onkeydown = e => {
        if (e.key === ' ') {
            alert('You pressed Space.');
        }
    }
});
