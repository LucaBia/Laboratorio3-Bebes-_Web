import { combineReducers } from 'redux';
import * as types from '../types/baby';

//sate = lista
const order = (state = [], action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return [...state, action.payload.id];
        }
        default: {
            return state;
        }
    }
};

//state = pojo
const byId = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return {
                ...state,
                [action.payload.id]: action.payload, 
                };
            }
        default: {
            return state;
        }
    }
};

const baby = combineReducers({
  byId,
  order,
});

export default baby;

//capturar un bebe
export const getBaby = (state, id) => state.byId[id];
//capturar todos los bebes registrados
export const getBabies = (state) => state.order.map(
    id => getBaby(state, id),
  ).filter(baby => baby != null);