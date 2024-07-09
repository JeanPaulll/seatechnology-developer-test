import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import "./styles.scss";

interface ISideBarIcon {
    icon: string;
    url: string;
}
/**
 * @constructor
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 */
function SideBarIcon({icon, url}: ISideBarIcon) {
    const {pathname} = useLocation();
    const isActive = pathname === url;
    return (
        <Link to={url}>
            <div className={`sidebar-icon ${isActive ? 'active' : ''}`}>
                <img src={icon} alt={"a"}/>
            </div>
        </Link>
    )
}

export default SideBarIcon