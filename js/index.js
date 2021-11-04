const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const copyBtn = document.getElementById('#copy-btn');

copyBtn.addEventListener('click', function() {
    console.log("clicked");
    var copyText = document.getElementById("mailInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
  
    alert("Email copié: " + copyText.value);
});