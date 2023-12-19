import React from 'react'
import { Link } from 'react-router-dom'

function NavigationLink(props) {

    const { bg,to,text,textColor } = props
    return (
        <Link className='nav-link' to={to} style={{ background: bg, color: textColor }}>{text}</Link>
    )
}

export default NavigationLink