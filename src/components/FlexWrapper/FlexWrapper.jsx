import React from 'react'
import './flexwrapper.css'

export default function FlexWrapper(props) {
    return (
        <div>
            <h1>Listado de Prodcutos</h1>
            <div className='flex'>
                {props.children}
            </div>
        </div>
    )
}
