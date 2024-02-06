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
  const video = document.createElement('video');
  const photoCanvas = document.createElement('canvas');
  const photoCtx = photoCanvas.getContext('2d');

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  video.srcObject = stream;
  video.play();

  video.addEventListener('play', () => {
    setInterval(() => {
      photoCanvas.width = video.videoWidth;
      photoCanvas.height = video.videoHeight;
      photoCtx.drawImage(video, 0, 0, photoCanvas.width, photoCanvas.height);
    }, 1000 / 30); // Ajusta la frecuencia de actualización según sea necesario
  });

  document.body.appendChild(video);
  document.body.appendChild(photoCanvas);
}

function saveData() {
  signatureDataURL = canvas.toDataURL();
  photoDataURL = document.querySelector('canvas').toDataURL();
  
  window.location.href = `confirmation.html?signature=${signatureDataURL}&photo=${photoDataURL}`;
}
