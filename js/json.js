/*fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

*/


// const url = "https://jsonplaceholder.typicode.com/todos/1"
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json));

function loadData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json));
}

function loadData2(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data));
    
}


function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then( UsersData => displayUser(UsersData));
}



function displayUser(data){
    const ul = document.getElementById('user-list')
    for (const user of data) {
        console.log(user.email);
        const li = document.createElement('li')
        li.innerText = user.name
        ul.append(li)
    }
}