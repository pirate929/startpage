import React from "react"
import LinkSection from "../LinkSection"

import "./index.css"

const LinkTable = ({sectionsList}) => {
        return (
                <div className="linkTable">
                        {
                                sectionsList.map(({ title, list }) => {
                                        return <LinkSection key={title} list={list} title={title} />
                                })
                        }
                </div>);
}

export default LinkTable
