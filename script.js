// JavaScript for language toggling
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleLanguage');
    const englishElements = document.querySelectorAll('.en');
    const frenchElements = document.querySelectorAll('.fr');

    let isEnglish = true;

    toggleButton.addEventListener('click', function () {
        if (isEnglish) {
            englishElements.forEach(function (element) {
                element.style.display = 'none';
            });
            frenchElements.forEach(function (element) {
                element.style.display = 'block';
            });
            toggleButton.textContent = 'Switch to English';
        } else {
            frenchElements.forEach(function (element) {
                element.style.display = 'none';
            });
            englishElements.forEach(function (element) {
                element.style.display = 'block';
            });
            toggleButton.textContent = 'Switch to French';
        }

        isEnglish = !isEnglish;
    });
});
