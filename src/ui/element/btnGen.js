function generateButton(className,id) {
    const newButton = document.createElement('button');
    newButton.classList.add('button');
    if(className) {
        newButton.classList.add(className);
    } if(id) {
        newButton.id = id;
    }
    return newButton;
}

export default generateButton;