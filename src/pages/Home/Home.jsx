import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'

import image from '../../../assets/undraw_connecting_teams_re_hno7.svg'
import './home.css'

// let image = null;

function Home() {
  return(
    <>
      <div class="page-content home-page">
        <Header 
          image={null} 
          description="Home page"
        >
          Um espaço para trocar indicações de vagas em TI<br/>
          Bora se indicar!
        </Header>
        <img className='home-image' src={image} alt="" srcset="" />
      </div>
    </>
  )
}

export default Home
