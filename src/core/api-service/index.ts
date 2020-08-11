import axios from 'axios';

interface apiConfig{
    url     : string
}

const fetchAPI = async (data : apiConfig) => {
    return axios.get(data.url)
    .then(res => {
        console.log("API SUCCESS ", res);
        return res.data.items;
    })
    .catch(err =>{
        console.log("GOT AN ERROR ", err);
        return [];
    });
}

export default fetchAPI;