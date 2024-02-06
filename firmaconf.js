const urlParams = new URLSearchParams(window.location.search);
const signatureDataURL = urlParams.get('signature');
const photoDataURL = urlParams.get('photo');

const personalData = urlParams.toString();

document.getElementById('personalData').innerText = personalData;
document.getElementById('signatureImage').src = signatureDataURL;
document.getElementById('photoImage').src = photoDataURL;

function downloadPDF() {
  const doc = new jsPDF();
  const personalDataText = document.getElementById('personalData').innerText;
  const signatureImage = new Image();
  const photoImage = new Image();

  signatureImage.src = signatureDataURL;
  photoImage.src = photoDataURL;

  doc.text(personalDataText, 10, 10);
  doc.addImage(signatureImage, 'PNG', 10, 30, 100, 50);
  doc.addImage(photoImage, 'PNG', 10, 100, 100, 100);

  doc.save('personal_data.pdf');
}
