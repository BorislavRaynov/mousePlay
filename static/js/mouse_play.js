document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById('video');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let coordinatesDisplay = document.getElementById('coordinates');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(error) {
            console.error('Error accessing webcam:', error);
        });

    document.addEventListener('mousemove', function(event) {
        coordinatesDisplay.innerText = `Mouse Coordinates: (${event.clientX}, ${event.clientY})`;
    });

    document.addEventListener('click', function(event) {
        if (event.button === 0) {
            let x = event.clientX;
            let y = event.clientY;

            // Capture image from video stream
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            let imageData = canvas.toDataURL('image/jpeg');

            // Send image data and coordinates to server via WebSocket
            let ws = new WebSocket('ws://localhost:8000/ws/mouse_data/');
            ws.onopen = function() {
                ws.send(JSON.stringify({
                    event: 'left_click',
                    x: x,
                    y: y,
                    image: imageData
                }));
            };
        }
    });
});
