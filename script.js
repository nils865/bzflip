function call() {
    username = document.getElementById('username').value

    fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`).then(response =>{
    return response.json();
    }).then(data => {
        out = data
    })

    document.getElementById('output').innerHTML = out
}