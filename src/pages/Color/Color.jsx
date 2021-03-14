import React from 'react'
import './Color.css'
import "../../App.css";

import Card from '../../components/cards/Card';

function Color({
    click,
}) {
  
    return (
        <div>  
    <h1 className='heading'>Click To Copy</h1>
    <div className='Cards-Container'>
        <div className='fourCol'>
            <div className='twoCol'>
                <Card Color='51E1ED'/>
                <Card Color='E07C24'/>
            </div>
            <div className='twoCol'>
            <Card Color='8D3DAF'/>
            <Card Color='758283'/>
            </div>
            <div className='twoCol'>
            <Card Color='E03B8B'/>
            <Card Color='FF6666'/>
            </div>
        </div>
        <div className='fourCol'>
            <div className='twoCol'>
            <Card Color='03C6C7'/>
            <Card Color='242B2E'/>
            </div>
            <div className='twoCol'>
            <Card Color='5A20CB'/>
            <Card Color='6A1B4D'/>
            </div>
            <div className='twoCol'>
            <Card Color='CAD5E2'/>
            <Card Color='35BDD0'/>
            </div>
        </div>
        <div className='fourCol'>
            <div className='twoCol'>
            <Card Color='22CB5C'/>
            <Card Color='F4BE2C'/>
            </div>
            <div className='twoCol'>
            <Card Color='DDD101'/>
            <Card Color='C7C11A'/>
            </div>
            <div className='twoCol'>
            <Card Color='A77B06'/>
            <Card Color='B4161B'/>
            </div>
        </div>
        
    </div>
         
        </div>
    )
}

export default Color
