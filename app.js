const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");

function generateQR() {
    if(qrText.value.length > 0){
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?data=' + qrText.value;

    imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);

    }
}

document.getElementById('qrText').addEventListener("keyup", (event) => {
    event.preventDefault();
    if(event.keyCode === 13){
        const btn = document.getElementById('btn').click();
    }
})