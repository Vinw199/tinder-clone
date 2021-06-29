import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://tinder-clone-backend-w199.herokuapp.com'
});

export default instance;