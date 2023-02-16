import React from 'react'
import readyImg from '../.././img/ready.jpg'
import left from '../.././img/left.svg'
import { Link } from 'react-router-dom'

export const Ready = ({isCloseCart,setCloseCart}) => {
  return (
  <div className='empty-block'>
    <img className='ready-img' src={readyImg} alt="basket" />
    <h3 className='ready-title'>Заказ оформлен!</h3>
    <p className='ready-text'>Ваш заказ скоро будет передан курьерской доставке</p>
    <Link onClick={()=>setCloseCart(false)} className='empty-btn' to="/"> <img src={left} alt="left" /></Link>
  </div>
  )
}