import { combineReducers } from 'redux';
import baby, * as babySelectors from './baby';
import events, * as eventsSelectors from './event';
import selected, * as selectedSelectors from './selected';


const reducer = combineReducers({
  baby,
  events,
  selected,
});


export default reducer;

export const getBaby = (state, id) => babySelectors.getBaby(state.babies, id);
export const getBabies = state => babySelectors.getBabies(state.babies);
export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id);
export const getEvents = state => eventsSelectors.getEvents(state.events);
export const getEventBaby  = (state, babyId) => eventsSelectors.getEventBaby(state.events, babyId);
export const getEventsBabies = state => eventsSelectors.getEventsBabies(state.events);
export const getSelectedBaby = state => selectedSelectors.getSelectedBaby(state.selectedBaby);