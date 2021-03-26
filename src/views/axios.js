import axios from 'axios'


axios.defaults.baseURL="https://share.highflierstutors.com/api/";

axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';