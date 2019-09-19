import axios from 'axios';

 const configAxios = (reponseToken) =>{
    axios.defaults.baseURL="https://pushexercise.herokuapp.com";
    axios.defaults.headers.common["Authorization"] = `Bearer ${reponseToken}`;
    axios.defaults.headers.post["Content-Type"] = "application/json";
}
export default configAxios;