import React from "react"
import "./index.css"

const Link = (props) => {
        return(
                <a 
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                >
                        {props.children}
                </a>
        )
}

export default Link;