const user = {id:1, name: 'jangkar', job: "Teacher"}

// javaScript object notation 
const stringField = JSON.stringify(user)
console.log(user);
console.log(stringField);

const loadQ =()=>{
    // console.log('hello')
    fetch("https://api.kanye.rest/")
    .then( res => res.json())
    .then( data => displayQuote(data))
}
// loadQ()


const displayQuote=(quote)=>{
const blockquote = document.getElementById('some-words')


blockquote.innerText = quote.quote
}