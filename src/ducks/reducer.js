const initailState = {
    username: '',
    id: '',
    picture: ''
}

const USERNAME = "USERNAME"
const ID = "ID"
const PICTURE = "PICTURE"


export default function (state = initailState, action) {
    switch (action.type) {
        case USERNAME:
            return {...state, username: action.payload}
        case ID:
            return {...state, id: action.payload}
        case PICTURE:
            return {...state, picture: action.payload}
        default:
            return state
    }
}

export function updateUserName(name){
    return {
        type: USERNAME,
        payload: name
    }
}
export function updateId(id){
    return {
        type: ID,
        payload: id
    }
}
export function updatePicture(pic){
    return {
        type: PICTURE,
        payload: pic
    }
}