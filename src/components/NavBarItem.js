import { Link } from "react-router-dom"

export const NavBarItem = ({route, linkText}) => {
    return <li><Link to={route}>{linkText}</Link></li>
}