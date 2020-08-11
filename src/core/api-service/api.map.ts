// let url = "https://api.stackexchange.com/2.2/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&page=5&pagesize=20&order=desc&sort=activity&tagged=javascript&filter=default"

const API_CONFIG = {
    BASE_URL    :   "https://api.stackexchange.com/2.2/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&pagesize=20&order=desc&sort=activity&filter=default"
}

export const API_MAP = {
    relatedKeyDataAPI         :   (searchStr : string) => makeRelatedKeySearchAPI(searchStr),
    paginationDataAPI         :   (page : number, searchStr : string) => makePaginatedKeyAPI(page, searchStr)
}


const makeRelatedKeySearchAPI = (searchStr : string) =>{
    return API_CONFIG.BASE_URL + `&tagged=${searchStr}&page=1`;
}


const makePaginatedKeyAPI = (page : number, searchStr : string) =>{
    return API_CONFIG.BASE_URL + `&tagged=${searchStr}&page=${page}`;
}

// &tagged=javascript
// &page=${data.page}