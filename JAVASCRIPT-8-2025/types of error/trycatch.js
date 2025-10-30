try {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json())
        .then(res => console.log(res))
} catch (error) {
    console.log(error)
}