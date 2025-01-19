function post(id, sum=0, cur){
    const dataToSend = { id: id, cur: sum + cur};
    fetch('/test_post/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .catch(error => console.error('Ошибка:', error));
    }

export {post}