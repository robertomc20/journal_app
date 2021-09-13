import { types } from "../types/types";


// {
//     uid: djsajdsadj123123,
//     name: 'roberto'
// }

// Es importante pasarle el state con un valor, si es undefined o null, tirara error.
export const authReducer = (state = {}, action) => {
    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return { }
        default:
            return state;
    }
}