if (window.innerWidth > 600) {
            // Redirect if the screen width is greater than 600 pixels (adjust as needed)
            window.location.href = "#";
        }

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
	if (qrText.value.length > 0) {
		qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

	}else{
		alert("You must add text or link")
	}
}
