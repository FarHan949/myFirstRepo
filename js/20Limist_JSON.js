const loadComment=()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=20`)
    .then( res => res.json())
    .then( data => displayComment(data))
    // .then( data => console.log(data[0].name))
}

const displayComment=(comment)=>{
   comment.forEach(element => {
     console.log(element)
   });
}


loadComment()