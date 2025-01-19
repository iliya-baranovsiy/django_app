function select(){
    let url = new URL(window.location.href);
    let user_id = url.searchParams.get('user_id');
    return user_id;
}


export {select}