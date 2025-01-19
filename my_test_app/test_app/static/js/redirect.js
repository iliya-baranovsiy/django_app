window.onload = function() {
    if (typeof Telegram !== 'undefined') {
        const userId = Telegram.WebApp.initDataUnsafe.user.id;
        console.log('User ID:', userId);
        let url = "http://localhost:8000/redirect/?user_id="
        let ans_url = url + userId
        console.log("new_url= "+ans_url)
        window.location.href = ans_url;
    } else {
        console.error('Telegram API не загружен');
    }
};