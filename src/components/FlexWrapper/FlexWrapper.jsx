import React from 'react'
import './flexwrapper.css'

export default function FlexWrapper(props) {
    return (
        <div>
            <div className='flex'>
                {props.children}
            </div>
        </div>
    )
}
