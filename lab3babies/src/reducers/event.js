import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/events';


const order = (state = [], action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return [...state, action.payload.id];
        }
        case types.EVENT_DELETED: {
            const newState = [...state].filter(b => b !== action.payload.id);
            return newState;
        }
        default: {
            return state;
        }
    }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_ADDED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case types.EVENT_DELETED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const orderBaby = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_BABY_ASSIGNED: {
      return {
        ...state,
        [action.payload.baby]: [state[action.payload.baby], action.payload.event],
      };
    }

    case types.EVENT_BABY_UNASSIGNED: {
      return {
        ...state,
        [action.payload.baby]: state[action.payload.baby].filter(baby_ => baby_ !== action.payload.event),
      };
    }
    default: {
      return state;
    }
  }
};


const event = combineReducers({
  byId,
  order,
  orderBaby,
});


export default event;

//capturar evento
export const getEvent = (state, id) => state.byId[id];
//capturar todos los eventos registrado
export const getEvents = (state) => state.order.reverse().map(
  id => getEvent(state, id),
).filter(event => event != null);

//capturar evento de un bebe
export const getEventBaby = (state, babyId) => state.byBabyID[babyId];
//capturar eventos de bebes
//Se itera con map
export const getEventsBabies = state => state.order.map(
  babyId => getEventBaby(state, babyId),
).filter(babyId => babyId != null);