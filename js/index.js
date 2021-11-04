const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const copyBtn = document.querySelector('#copy-btn');

copyBtn.addEventListener('click', event => {
    event.preventDefault
    copyMail()
});

function copyMail() {
    var copyText = document.getElementById("myMail");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
  
    alert("Email copié: " + copyText.value);
}