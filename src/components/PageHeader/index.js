import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import './index.css'

const PageHeader = () => {
        return(
                <div className="pageHeader">
                        <p className="headerText">Welcome Linmoy</p>
                        <button className="icon-addUrl">
                                <FontAwesomeIcon icon={faPlusSquare} />
                        </button>
                </div>
        )
}


export default PageHeader;