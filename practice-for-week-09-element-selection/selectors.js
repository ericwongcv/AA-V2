const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const fruitList = window.document.body.children[1].children[2];
    const seededFruit = [];
    const seedlessFruit = [];

    for (let i = 0; i < fruitList.children.length; i++) {
        if (fruitList.children[i].className === 'seed') {
            seededFruit.push(fruitList.children[i]);
        } else if (fruitList.children[i].className === 'seedless'){
            seedlessFruit.push(fruitList.children[i]);
        }
    }
    console.log(seededFruit);
    
    // 2. Get all seedless fruit elements
    // Your code here

    console.log(seedlessFruit);

    // 3. Get first seedless fruit element
    // Your code here

    console.log(seedlessFruit[0]);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here

    console.log(window.document.body
        .childNodes[5]
        .childNodes[3]
        .childNodes[1]
        .childNodes[1]
        .innerText);

    // 5. Get all children of element "wrapper"
    // Your code here

    console.log(window.document.body
        .children[2]
        .children[1]
        .children);

    // 6. Get all odd number list items in the list
    // Your code here

    const odds = [];
    const evens = [];
    const orderList = window.document.body.children[2].children[2].children;
    
    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].className === 'odd') {
            odds.push(orderList[i].innerText);
        } else {
            evens.push(orderList[i].innerText);
        };
    }

    console.log(odds);

    // 7. Get all even number list items in the list
    // Your code here

    console.log(evens);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    const companies = window.document.body.children[3].children[1].children;
    const noClass = [];
    let amazonEl;
    
    for (let i = 0; i < companies.length; i++) {
        if (!companies[i].className) {
            noClass.push(companies[i].innerText);
        };
        if (companies[i].innerText === 'Amazon') {
            amazonEl = companies[i];
        }
    }

    console.log(noClass);

    // 9. Get "Amazon" list element
    // Your code here

    console.log(amazonEl);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here

    const unicornCo = window.document.body.children[3].children[3].children;
    console.log(unicornCo);
}

window.onload = select;
