document.querySelector(".getStarted").addEventListener("click",function(e){
    var opa=1;
    var intervalID=0;
    function fadeOut(){
        intervalID=setInterval(hide,200);
    }
    function hide()
    {
        var container=document.querySelector(".disappear");
        // opacity=Number(getComputedStyle(container).getPropertyValue("opacity"));
        // console.log(opacity)
        if(opa>0)
        {
            opa=opa-0.1;
            container.style.opacity=opa;
        }
        else{
            clearInterval(intervalID);
        }
    }
    document.querySelector(".disappear").style.display="none";
    document.querySelector(".home-page").style.display="block";
    const namePerson=document.querySelector("#name").value; 
    document.querySelector(".myName").innerHTML=namePerson; 
    document.querySelector('body').style.backgroundImage="url('')";
})
// $(document).ready(function(){
//     var images=['Images1/1.png',
//                 'Images1/2.png',
//                 'Images1/3.png',
//                 'Images1/4.png',
//                 'Images1/5.png',
//                 'Images1/6.png'];
    
//     var randomNumber = Math.floor(Math.random() * images.length) +1;
//     var bgImg = 'url(' + images[randomNumber] + ')';
    
//     $('body').css({'background':bgImg, 'background-size':'cover', });
    
//     });
var num = Math.floor( Math.random() * 6 ) +1;
let link="Images1/"+num+".png";
// console.log(link);
// console.log('Images1/'+num+'.png');
document.body.style.backgroundImage = "url("+link+")";
// document.body.background = 'Images1/'+num+'.png';
// document.body.style.backgroundSize = "cover";// Background repeat

// document.getElementsByClassName("backgroundImage").src = "Images1/"+imageNumber+".png";

