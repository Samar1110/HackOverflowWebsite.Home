document.querySelector(".getStarted").addEventListener("click",function(e){
    var opa=1;
    var intervalID=0;
    function fadeOut(){
        intervalID=setInterval(hide,200);
    }
    function hide()
    {
        var container=document.querySelector(".disappear");
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

var num = Math.floor( Math.random() * 6 ) +1;
let link="Images1/"+num+".png";

document.body.style.backgroundImage = "url("+link+")";


