const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const copyBtn = document.getElementById('#copy-btn');

copyBtn.addEventListener('click', function() {
    copyMail()
});

function copyMail() {
    var copyText = document.getElementById("myMail").attribute("href");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
  
    alert("Email copié: " + copyText.value);
}