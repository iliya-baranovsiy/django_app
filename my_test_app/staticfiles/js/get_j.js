async function get_cur(id) {
    let url = '/get/' + id + '/';
    try {
        let response = await fetch(url);
        let data = await response.json();
        let cur = data['cur'];
        return cur; // Возвращаем значение cur
    } catch (error) {
        console.error('Ошибка:', error);
        return null; // Возвращаем null в случае ошибки
    }
}





export { get_cur };