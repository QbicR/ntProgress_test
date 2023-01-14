import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('auth')
    const { pathname } = useLocation()

    const logOut = () => {
        localStorage.removeItem('auth')
        navigate('/auth')
    }

    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">Test App</span>
                    <button
                        className={auth ? 'btn btn-outline-danger' : 'btn btn-outline-success'}
                        type="submit"
                        hidden={pathname === '/auth'}
                        onClick={logOut}
                    >
                        {auth ? 'Выйти' : 'Войти'}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
