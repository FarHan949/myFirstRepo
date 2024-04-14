function displayPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( res => res.json())
    .then( data => ShowDisplay(data))
}

function ShowDisplay(Posts){
    const div = document.getElementById('div-container')
    for (const Post of Posts) {
        console.log(Post)
        const content = document.createElement('div')
        
        content.innerHTML= `
          <h4>User- ${Post.userId}</h4>
          
          <h3> Title : ${Post.title}</h3>
          <p> ${Post.body} </p>        `
         content.style.backgroundColor = 'lightpink'

        div.append(content)
    }
}
displayPost()