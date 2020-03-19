import * as types from '../types/selected';


const selected = (state = [0,"Ninguno",3], action) => {
    switch (action.type) {
        case types.BABY_SELECTED: {
            return action.payload; 
        }
        default: {
            return state;
        }
    }
};


export default selected;


export const getSelectedBaby = state => state;