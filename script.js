import { users } from "./users.js";

const resultElement = document.querySelector(".result");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  resultElement.textContent = "Пошук користувача...";

  // Створюємо проміс для симуляції пошуку
  const searchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomUser = Math.random() > 0.2; // 80% шанс успіху

      if (randomUser) {
        const user = users[Math.floor(Math.random() * users.length)];
        resolve(user);
      } else {
        reject("Користувача не знайдено 😞");
      }
    }, 2000); 
  });

  searchUser
    .then((user) => {
      resultElement.textContent = `Знайдено користувача: ${user.name}, вік: ${user.age}, Telegram: ${user.telegram}`;
    })
    .catch((error) => {
      resultElement.textContent = error;
    })
    .finally(() => {
      PNotify.info({
        text: "Пошук завершено!",
        delay: 3000, 
      });
    });
});
