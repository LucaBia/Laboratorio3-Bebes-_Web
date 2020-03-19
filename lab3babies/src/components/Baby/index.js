import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/selected';
import './style.css';


const Bebe = ({
  baby, 
  estaSeleccionado = false,
  onClick
}) => (
  <div
    className={`${estaSeleccionado ? 'selecionado' : ''}`}
    onClick={onClick}>

    <div className="bebeNuevo">
      {/* //Nombre */}
      <div className="nombre">
        {(Object.entries(Object.entries(baby)[1])[1]).slice(1)}
      </div>

      {/* Apellido */}
      <div className="apellido">
        {(Object.entries(Object.entries(baby)[2])[1]).slice(1)}
      </div>
    </div>
  </div>
);

export default connect(
  (state, { index }) => ({
    baby: index,
    id: Object.entries(Object.entries(index)[0][1])[0][1],
    nombre: Object.entries(Object.entries(index)[0][1]),
    apellido: Object.entries(Object.entries(index)[0][1])[2][1],
    isSelected: selectors.getSelectedBaby(state) === index,
  }),
  (dispatch, { index }) => ({
    onClick() {
      dispatch(actions.select_a_Baby(index));
    },
  }),
)(Bebe);