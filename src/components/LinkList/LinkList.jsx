import React from "react";
import Link from "../Link/Link";

const LinkList = ({ links }) =>
    <div className="link-list">
        { links && links[0] ?
            links.map( ( link, index ) =>
                <Link key={index} {...link} />
            ) : <></>
        }
    </div>;

export default LinkList;