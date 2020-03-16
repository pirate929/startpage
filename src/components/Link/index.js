import React from 'react'

const Link = (props) => {
        return(
                <a 
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                >
                        {props.children}
                </a>
        )
}

export default Link;