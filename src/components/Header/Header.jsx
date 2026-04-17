import { NavLink } from "react-router-dom"
import styles from './Header.module.css'
import UserLogin from "../UserLogin/UserLogin"

export default function Header({onLoginClick}) {
    return (
        <div className={styles.header}>
            <div className={styles['header__logo']}>MyServer</div>
            <nav className={styles['header__nav']}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles['header__nav--active'] : ""}>
                            Início
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/plans"
                            className={({ isActive }) => isActive ? styles['header__nav--active'] : ""}>
                            Planos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? styles['header__nav--active'] : ""}>
                            Contatos
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to=""
                            className={({ isActive }) => isActive ? styles['header__nav--active'] : ""}>
                            Dados
                        </NavLink>
                    </li> */}
                    <li>
                        <UserLogin onClick={onLoginClick}/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}