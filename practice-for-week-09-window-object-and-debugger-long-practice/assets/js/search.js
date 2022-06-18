export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
    let body = window.document.body;
    let stack = [body];

    while (stack.length > 0) {
        let nextNode = stack.pop();

        for (let i = 0; i < nextNode.children.length; i++) {
            stack.push(nextNode.children[i]);
        }
        
        if (nextNode.id === id) return nextNode;
    }
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
    let body = window.document.body;
    let queue = [body];

    while (queue.length > 0) {
        let nextNode = queue.shift();
        
        for (let i = 0; i < nextNode.children.length; i++) {
            queue.push(nextNode.children[i]);         
        }
        
        if (nextNode.tagName === tag) return nextNode;
    }
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
    let body = window.document.body;
    let queue = [body];

    while (queue.length > 0) {
        let nextNode = queue.shift();
        
        for (let i = 0; i < nextNode.children.length; i++) {
            queue.push(nextNode.children[i]);         
        }
        
        if (nextNode.classList[0] === cls) return nextNode;
    }
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
    let body = window.document.body;
    let stack = [body];
    let tags = [];

    while (stack.length > 0) {
        let nextNode = stack.pop();

        for (let i = 0; i < nextNode.children.length; i++) {
            stack.push(nextNode.children[i]);
        }
        
        if (nextNode.tagName === tag) tags.push(nextNode.tagName);
    }

    return tags;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
    let body = window.document.body;
    let stack = [body];
    let classes = [];

    while (stack.length > 0) {
        let nextNode = stack.pop();

        for (let i = 0; i < nextNode.children.length; i++) {
            stack.push(nextNode.children[i]);
        }
        
        if (nextNode.classList[0] === cls) classes.push(nextNode);
    }

    return classes;
}
