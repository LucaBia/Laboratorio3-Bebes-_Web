import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import Baby from '../Baby';
import './style.css';


const Bebes = ({ number }) => (
  <div className="contenedorBebes">
    {
      number.length === 0 ? (
        <h1 className="vacio">{'No tiene bebes'}</h1>
      ) : (
        (number).map(
          index => (
            <Baby
              key={index}
              index={index}
            />
          ),
        )
      )
    }
  </div>
);

export default connect(
  state => ({
    number: selectors.getBabies(state),
  }),
)(Bebes);