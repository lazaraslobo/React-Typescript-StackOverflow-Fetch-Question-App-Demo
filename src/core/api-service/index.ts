import axios from 'axios';

const fetchAPI = () : any => {
    axios.get(`https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q=firebase`)
      .then(res => {
          console.log("API SUCCESS ", res);
          return res;
      }).catch(err =>{
          console.log("GOT AN ERROR ", err);
      });
}

export default fetchAPI;