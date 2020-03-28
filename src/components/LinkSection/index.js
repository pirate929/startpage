import React from "react";
import Link from "../Link";

import "./index.css";

const renderList = (list) => {
                return list.map( ({title, link}) => {
                        return <Link key={title} link={link} >{title}</Link>;
                });
};

const LinkSection = ({list,title}) => {
        
        return(
                <div className="linkSection">
                        <h3 className="sectionHeader" >{title}</h3>
                        {renderList(list)}
                </div>
        );
};

export default LinkSection;