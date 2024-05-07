function addCat() {
    let newImage = document.getElementById("animals");
    let snippet = '<img src="cat.jpg"/>'
    newImage.insertAdjacentHTML('beforeend','<img src="cat.jpg"/>');
    
}

function addDog() {
    let newImage = document.querySelector("#animals");
    let snippet= '<img src="dog.jpg"/>'
    newImage.insertAdjacentHTML('beforeend','<img src="dog.jpg"/>');
    // .insertAdjacentHTML('beforeend','<img src="dog.jpg"/>');
}

    // document.querySelector('animals').insertAdjacentHTML('beforeend','<img src="dog.jpg"/>');

