import React from 'react'
import Link from '../Link';

const renderList = (list) => {
                return list.map( ({title, link}) => {
                        return <Link link={link} >{title}</Link>
                })
}

const LinkSection = ({list,title}) => {
        
        return(
                <div>
                        <h2>{title}</h2>
                        {renderList(list)}
                </div>
        );
}

export default LinkSection;