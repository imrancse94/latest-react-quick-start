const initialState ={
    token:null,
    user:null
}


export default function(state=initialState,action){
    switch(action.type){
        case 'SET_LOGIN':
            return {
                ...state,
                token:action.payload.access_token,
                user:action.payload.user
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                token:null,
                user:null
            }    
        default:
            return state;
    }
}