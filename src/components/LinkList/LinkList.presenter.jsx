import React from "react";
import Link from "../Link/Link";

const LinkListPresenter = ({ links }) =>
    <div className="link-list">
        {console.log(links)}
        { links && links[0] ?
            links.map( ( link, index ) =>
                <Link key={index} {...link} />
            ) : <></>
        }
    </div>;

export default LinkListPresenter;