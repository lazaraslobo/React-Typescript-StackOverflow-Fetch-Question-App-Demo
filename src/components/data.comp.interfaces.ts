export interface CardDataInterface {
    "tags": [],
    "owner": { 
        "reputation": number,
        "user_id": number,
        "user_type": string,
        "profile_image": string,
        "display_name": string,
        "link":  string
    },
    "is_answered": false,
    "view_count": number,
    "answer_count": number,
    "score": number,
    "last_activity_date": number,
    "creation_date": number,
    "question_id": number,
    "content_license": string,
    "link": string,
    "title": string 
}


export const CardDataInitial : CardDataInterface = {
    "tags": [],
    "owner": { 
        "reputation": 0,
        "user_id": 0,
        "user_type": "",
        "profile_image": "",
        "display_name": "",
        "link":  ""
    },
    "is_answered": false,
    "view_count": 0,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 0,
    "creation_date": 0,
    "question_id": 0,
    "content_license": "",
    "link": "",
    "title": "" 
}