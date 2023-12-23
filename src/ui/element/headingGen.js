function generateHeading(className, id) {
    const newHeading = document.createElement('div');
    newHeading.classList.add('heading');
    if(className) {
        newHeading.classList.add(className);
    } 
    if(id) {
        newHeading.id = id;
    }
    return newHeading;
}

export default generateHeading;