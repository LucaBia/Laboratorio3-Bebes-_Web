import * as types from '../types/selected';


export const select_a_Baby = index => ({
    //Referencia a types/twitter.js
    type: types.BABY_SELECTED,
    payload: index,
});