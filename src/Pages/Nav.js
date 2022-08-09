import React from "react"
import { NavLink } from "react-router-dom"
export default function Nav(){
    return(
        <nav>
            <h1>LOGO</h1>
            <ul>
                <li>
                <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                <NavLink to={"detail/1"}>Detail </NavLink>
                </li>
            </ul>
        </nav>
    )
}