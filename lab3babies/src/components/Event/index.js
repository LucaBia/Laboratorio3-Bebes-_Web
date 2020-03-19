import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/events';
import './style.css';


const Event = ({
  evento,
  onClick
}) => (
  <div className="contenedorEventosNuevos" onClick={onClick}>
    <div className="evento">

      <div>
        <h1 className="titulosEvento">Tipo: </h1> 
        {(Object.entries(Object.entries(evento)[1])[1]).slice(1)}
      </div>

      <div>
        <h1 className="titulosEvento">Nota: </h1> 
        {(Object.entries(Object.entries(evento)[3])[1]).slice(1)}
      </div>

      <div>
        <h1 className="titulosEvento">By: </h1> 
        {(Object.entries(Object.entries(evento)[4])[1]).slice(1)}
      </div>

      <div>
        <h1 className="titulosEvento">Fecha: </h1> 
        {(Object.entries(Object.entries(evento)[2])[1].toString().slice(1,23).replace(/-/g,"")).slice(1)} hrs
      </div>
    </div>
  </div>
);


export default connect(
  (state, { index }) => ({
    evento: index
  }),
  (dispatch, { index } )=> ({
    onClick() {
      dispatch(actions.deleteEvent(Object.entries(index)[0][1]))
    },
  }),
)(Event);