// Hata formundan alınan veriyi chat.html'e yönlendir
if (window.location.pathname.includes("error.html")) {
    document.getElementById("bugForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const description = document.getElementById("description").value;
        localStorage.setItem("initialMessage", description);
        window.location.href = "error-answer.html";
    });
}

// Chat sayfası için mesajlaşma işlevi
if (window.location.pathname.includes("error-answer.html")) {
    const chatMessages = document.getElementById("chatMessages");
    const initialMessage = localStorage.getItem("initialMessage");
    
    // İlk mesajı ekleme
    if (initialMessage) {
        addMessage(initialMessage);
    }

    // Mesaj gönderme işlemi
    document.getElementById("chatForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yenilenmesini önler
        const chatInput = document.getElementById("chatInput");
        
        // Yeni mesajı ekleme
        if (chatInput.value.trim() !== "") {
            addMessage(chatInput.value);
            chatInput.value = ""; // Giriş kutusunu temizler
        }
    });

    // Mesajları ekleyen fonksiyon
    function addMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Otomatik kaydırma
    }
}

// Nav links
const navLinkEls = document.querySelectorAll('.nav-item');
const windowPathname = window.location.pathname;
navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    if(windowPathname == navLinkPathname){
        navLinkEl.classList.add('active');
    }
});
