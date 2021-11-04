const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');

function copyMail() {
    var copyText = document.getElementById("myMail");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
  
    alert("Email copié: " + copyText.value);
}