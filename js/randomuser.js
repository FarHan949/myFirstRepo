const loadUsers=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then( res => res.json())
    .then( data => displayUsers(data))
}

const displayUsers=(users)=>{
    const userContainer = document.getElementById("users-container")
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>user name -${users.results[0].name.title} ${users.results[0].name.first} ${users.results[0].name.last}</h3>
        <h3>user Email - ${users.results[0].email}</h3>
        <h3>user Location - ${users.results[0].location.city}, ${users.results[0].location.country}</h3>
    `
    userContainer.append(div)
console.log(users.results[0].location)
}
loadUsers()