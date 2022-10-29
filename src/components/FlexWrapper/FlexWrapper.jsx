import React from 'react'
import './flexwrapper.css'

export default function FlexWrapper(props) {
    const clasenameDiv = props.rows === true ? "flex flex_rows" : "flex flex_cols"
    return (
        <div>
            <div className={clasenameDiv}>
                {props.children}
            </div>
        </div>
    )
}
