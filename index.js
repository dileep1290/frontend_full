document
  .getElementById("userForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = { name, email, password };

    try {
      const response = await fetch(
        "https://glitch.com/edit/#!/tree-substantial-lighter?path=database.js%3A1%3A0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        document.getElementById("responseMessage").textContent =
          "Data submitted successfully!";
      } else {
        document.getElementById("responseMessage").textContent =
          "Error submitting data!";
      }
    } catch (err) {
      console.error("Error:", err);
      document.getElementById("responseMessage").textContent =
        "Error submitting data!";
    }
  });
