let signatureDataURL = '';
let photoDataURL = '';

const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let painting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('touchend', endPosition);
canvas.addEventListener('touchmove', draw);

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX || e.touches[0].clientX) - rect.left;
  const y = (e.clientY || e.touches[0].clientY) - rect.top;

  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

async function takePhoto() {
  const video = document.getElementById('video');
  const photoCanvas = document.getElementById('photoCanvas');
  const photoCtx = photoCanvas.getContext('2d');

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  video.srcObject = stream;

  video.onloadedmetadata = () => {
    video.play();
  };

  video.addEventListener('play', () => {
    setInterval(() => {
      photoCtx.drawImage(video, 0, 0, photoCanvas.width, photoCanvas.height);
    }, 1000 / 30); // Ajusta la frecuencia de actualización según sea necesario
  });
}

function saveData() {
  signatureDataURL = canvas.toDataURL();
  photoDataURL = document.getElementById('photoCanvas').toDataURL();
  
  alert('Datos guardados.');
}

function viewData() {
  if (!signatureDataURL || !photoDataURL) {
    alert('Primero guarda los datos.');
    return;
  }

  const newWindow = window.open();
  newWindow.document.write(`
    <h2>Firma Digital</h2>
    <img src="${signatureDataURL}" alt="Firma Digital"><br><br>
    <h2>Foto</h2>
    <img src="${photoDataURL}" alt="Foto"><br><br>
    <button onclick="downloadData()">Descargar</button>
  `);
}

function downloadData() {
  const signatureImage = new Image();
  signatureImage.src = signatureDataURL;

  const photoImage = new Image();
  photoImage.src = photoDataURL;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = signatureImage.width + photoImage.width;
  canvas.height = Math.max(signatureImage.height, photoImage.height);

  ctx.drawImage(signatureImage, 0, 0);
  ctx.drawImage(photoImage, signatureImage.width, 0);

  const downloadLink = document.createElement('a');
  downloadLink.download = 'signature_and_photo.png';
  downloadLink.href = canvas.toDataURL('image/png');
  downloadLink.click();
}
