function showtext(overlayid){
var over=document.getElementById(overlayid);
over.style.opacity=1;
}

function hidetext(overlayid){
    var over=document.getElementById(overlayid);
    over.style.opacity=0;

}
function handleIntersection(entries, observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting) {
            var image =document.getElementById('img1');
             image.classList.add('animate');
        }
        
    });
};
const options={
    root:null,
    rootMargin:'0px',
    threshold:0.5
};
const observer = new IntersectionObserver(handleIntersection,options);
var image =document.getElementById('img1');
observer.observe(image);


function display(){
    var inputField= document.getElementById('text');
   var inputvalue=inputField.value;
    var displayElement=document.getElementById('text');
    inputField.style.display="none";
    var hover=document.getElementById('send');
    hover. value='thank you';
 
setTimeout(function (){
    hover.value="send";
    inputField.style.display="inline-block";
 },1000);
 }

 function validateform(){
 var email= document.getElementById('email-1').value;

 var error= document.getElementById("error");

 var emailpattern=/^[a-zA-Z0-9.]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;
 if(!emailpattern.test(email)){
    error.innerHTML="INVALID EMAIL ADDRESS";
    return false;
 }else{
    error.innerHTML="";
 }
 }



