let arabic= document.getElementById("arabic");
let english= document.getElementById("english");
let titlee= document.getElementById("titlee");
let welcome= document.getElementById("welcome-text");
let about= document.getElementById("about");
let abouttext= document.getElementById("aboutT");
let contact= document.getElementById("contact");


arabic.onclick= ()=>{
 setLanguage("arabic");
};

english.onclick= ()=>{
 setLanguage("english");  
};

function setLanguage(getLanguage){
 if(getLanguage ==="arabic"){
   titlee.innerHTML ="فنّي";
   welcome.innerHTML="أهلاً بك في موقع فني";
   about.innerHTML="معلوماتنا";
   abouttext.innerHTML="أنا رسام";
   contact.innerHTML="تواصل معنا";
 } else if(getLanguage ==="english"){
    titlee.innerHTML ="ARTi";
   welcome.innerHTML="Welcome to Arti website!";
    about.innerHTML="About us";
  abouttext.innerHTML="I am an artist";
  contact.innerHTML="Contact us";
 }
}