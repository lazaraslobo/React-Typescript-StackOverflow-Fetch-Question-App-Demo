import axios from 'axios';

interface pageSetup{
    page    : number
}

const fetchAPI = async (data : pageSetup) => {
    let url  = `https://api.stackexchange.com/2.2/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&page=${data.page}&pagesize=20&order=desc&sort=activity&tagged=javascript&filter=default`;
    return axios.get(url)
    .then(res => {
        console.log("API SUCCESS ", res);
        if(!res.data.items.length){
            throw new Error("No data")
        }

        return res.data.items;
    })
    .catch(err =>{
        console.log("GOT AN ERROR ", err);
        return [];
    });
}

export default fetchAPI;