import * as types from '../types/baby';

export const createBaby = (id, nombre, apellido) => ({
    //Referencia a types/baby.js
    type: types.BABY_ADDED,
    payload: { id, nombre, apellido},
  });