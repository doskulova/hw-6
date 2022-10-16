
const getResponse = async ()=>{
let response = await fetch('https://jsonplaceholder.typicode.com/posts');
let content = await response.json();
content = content.filter((e)=> e.userId ===1)
const posts = document.querySelector('#posts')
let key;
for(key in content) {
  posts.innerHTML += `
  <div class="post"> 
  <h4>User id: ${content[key].userId}</h4>
  <h4> Id: ${content[key].id}</h4> 
  <p>${content[key].title}</p>
  <p>${content[key].body}</p> 
  </div> `
}
console.log(content)
}
getResponse();


