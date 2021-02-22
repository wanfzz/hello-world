import React, { FC } from "react";
import { useHistory } from 'react-router'
interface MenuItem {
    name: string,
    path: string
}

const Menu: FC = () => {
    const history = useHistory()
    const MenuData: MenuItem[] = [
        {name: 'HOME_PAGE', path: '/home'},
        {name: 'LOGIN_PAGE', path: '/login'},
        {name: 'TODO_PAGE', path: '/todo'},
    ]
    return (
        <ul>
            {
                MenuData.map((item, index) => {
                    return <li key={`menu_cell${index}`} onClick={() => history.push(item.path)}>{item.name}</li>
                })
            }
        </ul>
    )
}

export default Menu