// script.js file

function domReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1000);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(function () {

  // If found you qr code
  function onScanSuccess(decodeText, decodeResult) {
    console.log("You Qr is : " + decodeText, decodeResult);
    location.replace("confirmationPage.html")
  }

  let htmlscanner = new Html5QrcodeScanner(
    "my-qr-reader",
    { fps: 10, qrbos: 250, qrbox: {width:250, height:250} }
  );
  htmlscanner.render(onScanSuccess);
});