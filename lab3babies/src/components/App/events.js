import React from 'react';
import EventForm from '../FormOfEvent';
import Events from '../Events';


function AllEvents(){
    return (
        <div className = "seccionEventos">
            <Events />
            <EventForm />
        </div>
    )
}
export default AllEvents;