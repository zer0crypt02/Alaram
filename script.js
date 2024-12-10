let alarmTime = null;
const timeDisplay = document.getElementById("time");
const alarmSound = document.getElementById("alarm-sound");

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    // Alarm zamanı kontrolü
    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        alarmSound.play();
        alarmTime = null; // Alarmı devre dışı bırak
    }
}

// Alarmı ayarlama
function setAlarm() {
    const alarmInput = document.getElementById("alarm-time").value;
    if (alarmInput) {
        alarmTime = alarmInput;
        alert(`Alarm saati: ${alarmTime} olarak ayarlandı!`);
    } else {
        alert("Lütfen alarm saati girin.");
    }
}

// Saati her saniye güncelle
setInterval(updateClock, 1000);
