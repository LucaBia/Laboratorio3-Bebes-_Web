import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as selectors from '../../reducers';
import * as actions from '../../actions/baby';
import './style.css';

const BabyForm = ({ onSubmit }) => {
  const [vnombre, cNombre] = useState('');
  const [vapellido, cApellido] = useState('');
  return (
    <div className="contenedor"> 
      <h1 className="titulo">Nuevo Bebe</h1> 

      <div className="formulario">
      <div>
        <label className="titulo_nombre" htmlFor="name">Nombre</label>
        <input type="text" className="input" value={vnombre} onChange={e => cNombre(e.target.value)}/>
      </div>

      <div className = "FormField"> 
        <label className="titulo_apellido" htmlFor="name">Apellido</label>
        <input type="text" className="input" value={vapellido} onChange={e => cApellido(e.target.value)}/>
      </div>
     
      <button className="boton" type="submit" onClick={
        () => onSubmit(vnombre, vapellido)}>
        {'Crear'}
      </button>
    </div>
    </div>
  );
} 


export default connect(
  (state) => ({
    id: selectors.getBabies(state),
  }),
  dispatch => ({
    onSubmit(vnombre, vapellido) {
      let babyID = uuidv4();
      dispatch(
        actions.createBaby(babyID, vnombre, vapellido),
        );
    },
  }),
)(BabyForm);