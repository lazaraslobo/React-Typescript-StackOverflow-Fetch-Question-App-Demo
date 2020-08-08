import axios from 'axios';

let url  = `https://api.stackexchange.com/2.2/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&page=5&pagesize=20&order=desc&sort=activity&tagged=javascript&filter=default`;
const fetchAPI = async () => {
    return axios.get(url)
    .then(res => {
        console.log("API SUCCESS ", res);
        return res.data.items;
    })
    .catch(err =>{
        console.log("GOT AN ERROR ", err);
        return err;
    });
}

export default fetchAPI;