// Your code here
window.onload = () => {

    // Create h1 header and inject into body
    const h1 = document.createElement("h1");
    h1.innerText = "Kitten Pic";
    h1.style.textAlign = "center";
    document.body.appendChild(h1)

    // Create Div for Cat image
    const imgDiv = document.createElement("div");
    imgDiv.id = 'cat-image-div'
    imgDiv.style.width = "fit-content";
    imgDiv.style.margin = "60px auto";
    document.body.appendChild(imgDiv);

    // fetch picture from api
    fetchImg(); 
}

function fetchImg() {
    const imgDiv = document.getElementById("cat-image-div");

    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            url = data[0].url;

            // Create image element and append
            const img = document.createElement("img");
            img.style.maxWidth = "700px";
            img.alt = "Cat Image"
            img.src = `${url}`;
            imgDiv.appendChild(img);
        });
}
