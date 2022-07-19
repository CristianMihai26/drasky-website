//===================HEADER NAV=================//

//==================BURGER====================//

let burger = document.querySelector('.burger');

burger.onclick = function(){
    burger.classList.toggle('active');
    document.getElementById('navbtn1').classList.toggle('active');
    document.getElementById('navbtn2').classList.toggle('active'); 
    document.getElementById('navbtn3').classList.toggle('active'); 
    document.getElementById('navbtn4').classList.toggle('active'); 
    document.getElementById('navbtn5').classList.toggle('active');   
}

/*function myFunction(){
    if (burger='burger' + 'active'){
        document.getElementById('navbtn1').classList.toggle('active');   
    } 
}*/


//====================BUTON1=====================//

document.getElementById('buton1').onmouseover = function() {mouseOver1()};
document.getElementById('buton1').onmouseout = function() {mouseOut1()};


function mouseOver1(){
    document.getElementById("navbtn1").style.backgroundPositionY= "0px";
}

function mouseOut1() {
    document.getElementById("navbtn1").style.backgroundPositionY= "-80px";
}

//====================BUTON2=====================//

document.getElementById('buton2').onmouseover = function() {mouseOver2()};
document.getElementById('buton2').onmouseout = function() {mouseOut2()};

function mouseOver2(){
    document.getElementById('navbtn2').style.backgroundPositionY = "0px";
}
function mouseOut2(){
    document.getElementById('navbtn2').style.backgroundPositionY = "-80px";
}

//====================BUTON3=====================//

document.getElementById("buton3").onmouseover = function() {mouseOver()};
document.getElementById("buton3").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("navbtn3").style.backgroundPositionY = "0px";
}

function mouseOut() {
  document.getElementById("navbtn3").style.backgroundPositionY = "-80px";
}

//====================BUTON4=====================//

document.getElementById('buton4').onmouseover = function() {mouseOver4()};
document.getElementById('buton4').onmouseout = function() {mouseOut4()};

function mouseOver4() {
    document.getElementById('navbtn4').style.backgroundPositionY = "0px";
}

function mouseOut4(){
    document.getElementById('navbtn4').style.backgroundPositionY= "-80px";
}

//====================BUTON5=====================//

document.getElementById('buton5').onmouseover = function() {mouseOver5()};
document.getElementById('buton5').onmouseout = function() {mouseOut5()};

function mouseOver5(){
    document.getElementById('navbtn5').style.backgroundPositionY = "0px";
}

function mouseOut5(){
    document.getElementById('navbtn5').style.backgroundPositionY = "-80px";
}


const icon = document.querySelector('.a')
icon.onmouseover = function() {grow()};
icon.onmouseout = function() {shrink()};

function grow(){
    icon.style.transform = "scale(1.1)"
}

function shrink(){
   icon.style.transform = "scale(1)"
}

const icon2 = document.querySelector('.b')
icon2.onmouseover = function() {grow2()};
icon2.onmouseout = function() {shrink2()};

function grow2(){
    icon2.style.transform = "scale(1.1)"
}

function shrink2(){
   icon2.style.transform = "scale(1)"
}

const icon3 = document.querySelector('.c')
icon3.onmouseover = function() {grow3()};
icon3.onmouseout = function() {shrink3()};

function grow3(){
    icon3.style.transform = "scale(1.1)"
}

function shrink3(){
   icon3.style.transform = "scale(1)"
}

const icon4 = document.querySelector('.d')
icon4.onmouseover = function() {grow4()};
icon4.onmouseout = function() {shrink4()};

function grow4(){
    icon4.style.transform = "scale(1.1)"
}

function shrink4(){
   icon4.style.transform = "scale(1)"
}

const icon5 = document.querySelector('.e')
icon5.onmouseover = function() {grow5()};
icon5.onmouseout = function() {shrink5()};

function grow5(){
    icon5.style.transform = "scale(1.1)"
}

function shrink5(){
   icon5.style.transform = "scale(1)"
} 