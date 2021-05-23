const url="http://localhost:5000";

export const createBook=(author,title,category)=>{
    const book={
        author:author,
        title:title,
        category:category,
    }
    return fetch(`${url}/api/books/create`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(book)
    })
}

export const allBooks=()=>{
    const foods= fetch('http://localhost:5000/api/books/allbooks')
    
    return fetch(foods)
    .then(res=>res.json())
    .then(data => console.log(data));
}