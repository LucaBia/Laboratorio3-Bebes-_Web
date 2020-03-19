import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import Event from '../Event';
import './style.css';

const Events = ({ number }) => (
  <div className="eventos">
    {
      number.length === 0 ? (
        <h1 className="titulo_vacio">
          {'No hay eventos'}
        </h1>
      ) : (
        (number).map(
          index => (
            <Event
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
    number: selectors.getEvents(state),
  }),
)(Events);