window.onload = function() {
    initRedirect();
};

function initRedirect() {
    if (typeof Telegram !== 'undefined') {
        const userId = Telegram.WebApp.initDataUnsafe.user.id;
        console.log('User ID:', userId);
        let url = "https://5d88-85-159-229-111.ngrok-free.app/head_page/?user_id=";//url
        let ans_url = url + userId;
        setTimeout(function() {
            window.location.href = ans_url;
        }, 3000);
    } else {
        console.error('Telegram API не загружен');
    }
}