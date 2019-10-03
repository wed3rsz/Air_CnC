import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    // define a base da url para que seja mais facil a troca se preciso

});

export default api;