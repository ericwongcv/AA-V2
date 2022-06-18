export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    window.document.title = 'Eric Wong\'s Portfolio';
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    window.document.body.children[0].children[0].innerText = 'I am Eric Wong';
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    window.document.body.children[1].children[1].innerText = '\
        Looking for an opportunity as a Software Engineering. \
        I have a double degree in Aerospace \
        Engineering and Mechanical Engineering.'
    window.document.body.children[1].children[2].innerText = '\
        I am excited about Software Engineering and enjoy \
        the challenges I face while programming.'
}
