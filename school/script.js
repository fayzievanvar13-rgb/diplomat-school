// Мобильное меню

function toggleMenu() {
    const nav = document.querySelector(".nav");

    nav.classList.toggle("active");
}


// Уведомление

function showNotification(text) {

    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notificationText");

    notificationText.textContent = text;

    notification.style.display = "flex";

    setTimeout(() => {
        notification.style.display = "none";
    }, 4000);
}


function closeNotification() {
    document.getElementById("notification").style.display = "none";
}


// Кнопка "Поступить в школу"

function showAdmission() {

    showNotification(
        "🎓 Спасибо за интерес! Скоро здесь появится форма поступления."
    );
}


// Кнопка "Узнать больше"

function showInfo() {

    showNotification(
        "📚 Diplomat International School — современная школа для развития и образования учеников."
    );
}


// Закрываем мобильное меню после перехода по ссылке

const links = document.querySelectorAll(".nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".nav").classList.remove("active");

    });

});