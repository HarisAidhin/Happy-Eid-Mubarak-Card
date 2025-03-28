document.addEventListener("DOMContentLoaded", () => {
    const thrButton = document.getElementById("thrButton");
    const thrPopup = document.getElementById("thrPopup");
    
    // Play Takbiran Sound
    const takbiranAudio = new Audio("takbiran.mp3");
    takbiranAudio.loop = true;
    takbiranAudio.play();
    
    // 3D Card Effect
    const card = document.querySelector(".card");
    document.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    document.addEventListener("mouseenter", () => {
        card.style.transition = "none";
    });
    
    document.addEventListener("mouseleave", () => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
    
    // THR Button Click Event
    thrButton.addEventListener("click", () => {
        thrPopup.classList.remove("hidden");
        thrButton.style.display = "none";
    });
    
    // Add Watermark
    const watermark = document.createElement("div");
    watermark.innerText = "By HarisAidhin";
    watermark.style.position = "fixed";
    watermark.style.bottom = "10px";
    watermark.style.right = "10px";
    watermark.style.color = "white";
    watermark.style.fontSize = "12px";
    watermark.style.opacity = "0.7";
    document.body.appendChild(watermark);

    // 3D Ketupat Animation
    const ketupat = document.createElement("div");
    ketupat.classList.add("ketupat-3d");
    document.body.appendChild(ketupat);
    
    // Fake Dana Transfer Popup
    const danaPopup = document.createElement("div");
    danaPopup.classList.add("dana-popup", "hidden");
    danaPopup.innerHTML = `
        <div class="dana-header">DANA</div>
        <div class="dana-content">
            <p><strong>Transaksi Berhasil!</strong></p>
            <p>Kirim Uang Rp1.000.000 ke <strong>ANDA</strong></p>
            <p><strong>Total Bayar: Rp1.000.000</strong></p>
        </div>
        <button id="closeDana">Tutup</button>
    `;
    document.body.appendChild(danaPopup);

    thrButton.addEventListener("click", () => {
        danaPopup.classList.remove("hidden");
    });

    document.getElementById("closeDana").addEventListener("click", () => {
        danaPopup.classList.add("hidden");
    });
});