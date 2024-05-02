import React from 'react'
import "./navbar.css"
import img1 from '../../image/1 1.png'

function Navbar() {
    return (
        <div className="Navbar">
  <div className="a">
  <img className='img1' src={img1} alt="" />
            
                <div className="a-s">
                    <a className='navbar' href="О нас">О нас</a>
                    <a className='navbar' href="Видеоуроки">Видеоуроки</a>
                    <a className='navbar' href="Результаты">Результаты</a>
                    <a className='navbar' href="Проверьте свой сертификат">Проверьте свой сертификат</a>
                    <button className='button1'>Войти в аккаунт</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
