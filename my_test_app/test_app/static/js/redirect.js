window.onload = function() {
    initRedirect();
};

function initRedirect() {
    if (typeof Telegram !== 'undefined') {
        const userId = Telegram.WebApp.initDataUnsafe.user.id;
        console.log('User ID:', userId);
        let url = "https://31b0-85-159-229-118.ngrok-free.app/head_page/?user_id=";//url
        let ans_url = url + userId;
        setTimeout(function() {
            window.location.href = ans_url;
        }, 3000);
    } else {
        console.error('Telegram API не загружен');
    }
}

/*function redirect(){
    let url = "http://127.0.0.1:8000/head_page/?user_id=2"
    setTimeout(function() {
            window.location.href = url;
        }, 3000);
}




redirect()*/