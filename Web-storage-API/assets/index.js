
color.onchange =  function changeColor(){
    localStorage.setItem('color',document.getElementById('color').value);
    document.body.style.backgroundColor = localStorage.getItem('color');
};

font.onchange = function changeFont(){
    localStorage.setItem('font',document.getElementById('font').value);
    document.getElementById('container').style.fontFamily = localStorage.getItem('font');
};

image.onchange = function changeImage(){
    localStorage.setItem('image',document.getElementById('image').value);
    document.getElementById('img').src = localStorage.getItem('image');
};

