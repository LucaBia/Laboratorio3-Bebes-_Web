import * as types from '../types/events';


export const createEvent = (id, tipo, date_time, notas) => ({
    //Referencia a types/events.js
    type: types.EVENT_ADDED,
    payload: { id, tipo, date_time, notas },
});

export const deleteEvent =  ( id ) => ({
    //Referencia a types/events.js
    type: types.EVENT_DELETED,
    payload: { id },
});


export const assignEvent = (bebe, evento) => ({
    //Referencia a types/events.js
    type: types.EVENT_BABY_ASSIGNED,
    payload: {bebe, evento}
});

export const unassignEvent = (bebe, evento) => ({
    //Referencia a types/events.js
    type: types.EVENT_BABY_UNASSIGNED,
    payload: {bebe, evento}
});