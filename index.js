
// alert(a);
function changeImage() {
    var image = document.getElementById('myImage');
    const n=Math.floor(Math.random() * 15);
const a="image"+n+".jpg";
   
        image.src = a;
   
    
}
