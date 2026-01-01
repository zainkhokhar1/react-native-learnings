
export default function createPostApi(postData){
    return fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{   
            'Content-Type':'application/json'
        },
        body:JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        return data;
    }
    )
    .catch(error => {
        console.error('Error creating post:', error);
        throw error;
    });
}