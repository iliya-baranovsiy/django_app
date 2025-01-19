const controlButton = document.getElementById('rait-button');
        const popup = document.getElementById('popup');
        const popupOverlay = document.getElementById('popup-overlay');
        const closePopup = document.querySelector('.close-popup');

        // Открытие поп-ап окна
        controlButton.addEventListener('click', function() {
            popup.style.display = 'block';
            popupOverlay.style.display = 'block';
        });

        // Закрытие поп-ап окна
        closePopup.addEventListener('click', function() {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
        });

        // Закрытие поп-ап окна при клике на фон
        popupOverlay.addEventListener('click', function() {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
        });