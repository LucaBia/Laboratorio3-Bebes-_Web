import React from 'react';
import BabyForm from '../FormOfBaby';
import Babies from '../Babies';

function AllBabies(){
    return (
        <div className = "seccionBebes">
            <Babies />
            <BabyForm />
        </div>
    )
}
export default AllBabies;