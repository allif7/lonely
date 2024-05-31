const sentences = [
    "happy birthday to me :)"
];

let currentSentence = 0;
let typingText = document.getElementById("typing-text");

function typeSentence() {
    typingText.textContent = '';
    const sentence = sentences[currentSentence];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
        if (charIndex < sentence.length) {
            if (sentence[charIndex] === ':' && sentence[charIndex + 1] === ')') {
                typingText.innerHTML += `<span class="emoticon">:)</span>`;
                charIndex += 2; // Skip next character as well
            } else {
                typingText.textContent += sentence[charIndex];
                charIndex++;
            }
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                currentSentence = (currentSentence + 1) % sentences.length;
                typeSentence();
            }, 5000); // wait for 5 seconds before showing the next sentence
        }
    }, 150); // typing speed in milliseconds
}

typeSentence();
  // Fungsi untuk memainkan musik
  function playMusic() {
    var audio = document.getElementById("audioPlayer");
    audio.play();
}

// Tampilkan alert "Hai" ketika halaman dimuat
window.onload = function() {
    alert("Hai");
    playMusic(); // Panggil fungsi untuk memainkan musik
};
