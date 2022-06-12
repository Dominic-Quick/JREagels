import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom"

const Header = ({item1,item2,item3}) => {
    
  return (
    <div className='headerCon'>
        <div className='hTopCon'></div>
        <div className='hBottomCon'>
            <div className='bL'>
                <Link to='/Home' className='iconInMenu'></Link>
            </div>
            <div className='bR'>
                <ul className='menu'>
                    <CLink to='/SignUp'>{item1}</CLink>
                    <CLink to='/Schedule'>{item2}</CLink>
                    <CLink to='/Camp'>{item3}</CLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

function CLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
    <li className='mItem'>
        <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
    </li>
    )
}

export default Header