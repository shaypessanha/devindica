
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'

// import image from '../../../assets/comentarios-2black.svg'
import './sobre.css'

let image = null;

function Sobre() {
  return(
  <>
    <Header 
      image={image} 
      description="Sobre a página"
    >
      Muitas empresas possuem um sistema de indicação para as vagas que abrem. Por esse motivo, vemos muitas vagas que custam a ser preenchidas.<br/>
      Aqui é o espaço para acelerar esse processo através da troca (indicador X indicado)<br/>
      Bora se indicar!!!
    </Header>
  </>
 )
}

export default Sobre
