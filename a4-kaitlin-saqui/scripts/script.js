var centerImg = document.getElementById('displayedPhoto');
var arrImgs = ['images/cats/chow (1).jpg', 'images/cats/mimi.jpg', "images/cats/chai (6).JPG", "images/cats/chow (2).jpg", "images/cats/chai1.jpg",
"images/cats/chai (10).jpg", "images/cats/chow (4).jpg", "images/cats/chai (11).jpg", "images/cats/chai (9).jpg", "images/cats/chow (3).jpg"]

function checkScript()
{
    var email = document.getElementById("userEmail").value;
    var msg = document.getElementById("msg");

    if (email == "") {
        msg.innerHTML = "Please enter an email address";
        return false;
    }
    else {
        return true;
    }
}

function exitPage(){
    var userResponse = confirm("Are you sure you would like to exit this gallery?");
    if(userResponse==true){
        alert("Thank you for your time. Goodbye!")
        window.close();
    }
    else{
        alert("Enjoy my gallery! :)")
    }
}

var displayIndex=0;
centerDisplay(displayIndex);

function displayMe(n){
    centerDisplay(displayIndex = n);
}

function nextImg(n){
    centerDisplay(displayIndex+=n);
}

function centerDisplay(n){
    if(n > (arrImgs.length-1)){ //loop to first image(index 0) if index is greater than 9
        displayIndex=0;
    }
    if(n < 0){ // loop to last image (index 9) if index is less than 0
        displayIndex= (arrImgs.length-1)
    }
    centerImg.src = arrImgs[displayIndex];
}
