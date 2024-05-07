const photos = [
    "catche/images 5.jpg",
"catche/images 9.jpg",
"catche/download (1).jpg",
"catche/download (2).jpg",
"catche/download.jpg",
"catche/Forestcar.jpg",
"catche/images 1.jpg",
"catche/images 2.jpg",
"catche/images 3.jpg",
"catche/images 4.jpg"
];

let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image:',idx);
   const img = document.querySelector("#the_image");
   img.src = photos[idx];
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    idx += 1;
    if(idx===10){
        idx=0
    }
    console.log(idx);
    showImage();
    
    
    
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    idx -= 1;
    if(idx===-1){
        idx=9
    }
    console.log(idx);
    showImage();
   
}


