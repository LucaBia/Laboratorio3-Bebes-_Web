import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';
import './style.css';


const EventForm = ({ onSubmit, ID, nombre }) => {
  const [tipo, ctipo] = useState('');
  const [notas, cnotas] = useState('');
  
  return (
    <div className="contenedorEventos"> 
      <h1 className="tituloEvento">Agregar Evento</h1>
      <h1 className="infoBebe">Bebe: {nombre}</h1> 

      <div>
      <div className = "campo">
        <label className="titulo_tipo" htmlFor="name">Tipo</label>
        <select className="tipoOpciones" value={tipo} onChange={e => ctipo(e.target.value)}>
            <option value="Ninguna">-----------Seleccionar-----------</option>
            <option value="Siesta">Siesta</option>
            <option value="Pacha">Pacha</option>
            <option value="Popo">Cambio Pañal (Popó)</option>
            <option value="Pipi">Cambio Pañal (Pipí)</option>
            <option value="Pecho">Pecho</option>
          </select>
      </div>

      <div className = "FormField"> 
        <label className="titulo_notas" htmlFor="name">Notas</label>
        <input type="text" className="inputNota" value={notas} onChange={e => cnotas(e.target.value)}/>
      </div>
     
      <button className="botonEvento2" type="submit" onClick={
        () => onSubmit(tipo, notas, ID, nombre)
      }>
        {'Crear'}
      </button>
    </div>

    </div>
  );
} 


export default connect(
  (state) => ({
    ID: Object.entries(selectors.getSelectedBaby(state))[0][1],
    nombre: Object.entries(selectors.getSelectedBaby(state))[1][1],
  }),
  (dispatch, {state}) => ({
    onSubmit(tipo, nota, bebeID, nombre) {
      let eventoID = uuidv4();
      dispatch(
        actions.createEvent(eventoID, tipo, new Date(), nota, nombre),
        );
      dispatch(
        actions.assignEvent(bebeID, eventoID),
        );
    },
  }),
)(EventForm);
