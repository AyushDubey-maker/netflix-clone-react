import axios from 'axios'

const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})
export default instance

//Axios is a Promise-based HTTP client for JavaScript which can be used in your front-end application and in your Node. js backend. By using Axios it's easy to send asynchronous HTTP request to REST endpoints and perform CRUD operations.