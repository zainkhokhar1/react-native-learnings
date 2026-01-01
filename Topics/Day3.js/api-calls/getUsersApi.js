
export default function getUsersApi(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Error fetching users:', error);
        throw error;
    });
}