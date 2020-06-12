let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shihtzu.jpg') {
      myImage.setAttribute ('src','images/pup.png');
    } else {
      myImage.setAttribute ('src','images/shihtzu.jpg');
    }
}

 function getContent() {
  var username = document.getElementById('uname').value;
  var password = document.getElementById('pwd').value;
  if(username==='teju' && password==='pass'){
    document.getElementById('disp').style.display = 'block';
  }
}

