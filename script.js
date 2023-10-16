document.addEventListener("DOMContentLoaded", function(event){
  


/*change facebook icon */

document.getElementById("facebook").addEventListener('mouseover', ()=> {document.getElementById("facebook").src="./images/icon-facebook-white.svg"});
document.getElementById("facebook").addEventListener('mouseleave', ()=> {document.getElementById("facebook").src="./images/icon-facebook.svg"});


/*change instagram icon */

document.getElementById("instagram").addEventListener('mouseover', ()=> {document.getElementById("instagram").src="./images/icon-instagram-white.svg"});
document.getElementById("instagram").addEventListener('mouseleave', ()=> {document.getElementById("instagram").src="./images/icon-instagram.svg"});


/*change twitter icon */

document.getElementById("twitter").addEventListener('mouseover', ()=> {document.getElementById("twitter").src="./images/icon-twitter-white.svg"});
document.getElementById("twitter").addEventListener('mouseleave', ()=> {document.getElementById("twitter").src="./images/icon-twitter.svg"});



/*change pinterest icon */

document.getElementById("pinterest").addEventListener('mouseover', ()=> {document.getElementById("pinterest").src="./images/icon-pinterest-white.svg"});
document.getElementById("pinterest").addEventListener('mouseleave', ()=> {document.getElementById("pinterest").src="./images/icon-pinterest.svg"});


/*Make menu at click*/

function makeMenu(){
    document.getElementById('hambuger-menu').style.display="block";
    document.getElementsByClassName('heading')[0].style.display="none";
    };
    

document.getElementById('hamburger').addEventListener('ontouchstart', makeMenu);
document.getElementById('hambuger-menu').addEventListener("mouseenter", makeMenu);

function hideMenu(){
    document.getElementById('hambuger-menu').style.display="none";
    document.getElementsByClassName('heading')[0].style.display="block";
}

document.getElementById('hamburger').addEventListener('mouseleave', hideMenu);
document.getElementById('hambuger-menu').addEventListener("mouseleave", hideMenu);


/*Alert about blank items*/


function clickFunction(){
    alert("Hola! Since this is only a fictional company, nothing is expected to happen when you click on the icons or the menu items.Thank you for trying it!");
}

for( let x = 0; x < document.querySelectorAll('.common').length; x++ ){
document.querySelectorAll('.common')[x].addEventListener('click', clickFunction);
} 

});
