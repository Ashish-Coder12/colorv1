import React, { useState } from 'react'
import './Card.css'
import { FiCopy } from 'react-icons/fi';
import { IoMdDoneAll } from 'react-icons/io';
import { CopyToClipboard } from "react-copy-to-clipboard";
import Timeout from 'timeout.js'


function Card({Color}) {
    const [copyed ,setCopyed] =useState(false)
    const copySucess=() =>{
        setCopyed(true)
    }
    Timeout(1000).then(() => {
        setCopyed(false)
    });
    return (
        <div>
            <CopyToClipboard text={`#${Color}`} onCopy={copySucess}>
                <div className='card' style={{backgroundColor:`#${Color}`}}>{copyed ? <p className='copyDone'>Coppied<IoMdDoneAll/> </p> : ''}
                    <div className="copy"><FiCopy/></div>
                </div>
            </CopyToClipboard>
            <h3>{`#${Color}`}</h3>
        </div>
    )
}

export default Card;
