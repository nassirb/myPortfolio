const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const copyBtn = document.getElementById('copy-btn');

// copyBtn.addEventListener('click', function() {
//     var copyText = document.getElementById("mailInput");
  
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);
  
//     alert("Email copié: " + copyText.value);
// });

function copyText(htmlElement){
    if (!htmlElement) {
        return;
    }
    let elementText = html.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('#copy-btn').onclick = function(){
    copyText(document.querySelector('#text'))
}