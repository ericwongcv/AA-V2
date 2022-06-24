let popularityScore = 0;

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    fetchImage();

    // Create new cat button
    const newCatButton = createButton("New Cat", "new-cat-button");
    container.appendChild(newCatButton);
    newCatButton.addEventListener("click", e => {
        fetchAndClear();
    });

    // Create line for popularity score
    const popularity = document.createElement("p");
    popularity.id = "popularity";
    popularity.style.margin = "20px 0 10px 0";
    popularity.innerText = "Popularity Score: " + popularityScore;
    container.appendChild(popularity);

    // Create buttons for upvote and downvote
    const voteDiv = document.createElement("div");
    voteDiv.style.display = "flex";
    voteDiv.style.flexDirection = "horizontal";
    const upvote = createButton("Upvote", "upvote");
    const downvote = createButton("Downvote", "downvote");
    voteDiv.appendChild(upvote);
    voteDiv.appendChild(downvote);
    container.appendChild(voteDiv);

    // add functionality for upvote and downvote buttons
    upvote.addEventListener("click", e => {
        popularityScore++;
        setPopularity();
    });
    downvote.addEventListener("click", e => {
        popularityScore--;
        setPopularity();
    });

    // add comment input section
    const comment = document.createElement("div");
    comment.style.margin = "20px 0";
    comment.innerHTML = `
        <label for="comment">Comment:</label>
        <input type="text" id="comment" placeholder="Enter comment here">
        <button id="submit">Submit</button>
        `;
    container.appendChild(comment);

    // add comments container
    const commentContainer = document.createElement("div");
    commentContainer.id = "comment-container";
    container.appendChild(commentContainer);

    // add action to comment submit button
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", postComment);
    
};

const postComment = () => {
    const commentContainer = document.getElementById("comment-container");
    const comment = document.getElementById("comment").value;

    if (comment !== "") {
        const commentDiv = document.createElement("div");
        commentDiv.style.backgroundColor = "#77DCF2";
        commentDiv.style.border = "2px solid black";
        commentDiv.style.borderRadius = "15px";
        commentDiv.style.width = "200px";
        commentDiv.style.margin = "10px 0";

        const p = document.createElement("p");
        p.style.textAlign = "center";
        p.innerText = comment;

        commentDiv.appendChild(p)

        commentContainer.appendChild(commentDiv);
        document.getElementById("comment").value = "";
    }
}

const setPopularity = () => {
    const popularity = document.getElementById("popularity");
    popularity.innerText = "Popularity Score: " + popularityScore;
}

const createButton = (text, id) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.id = `${id}`;
    button.style.padding = "0 5px";
    button.style.margin = "0 5px"
    return button;
};

const fetchAndClear = async () => {
    await fetchImage();
    popularityScore = 0;
    setPopularity();
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};
