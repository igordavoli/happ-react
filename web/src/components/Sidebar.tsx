import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import Icon from '../images/icon.svg'
import '../styles/components/sidebar.css'

const UseHistory = useHistory;
export default function sidebarComponent() {
  const { goBack } = UseHistory();
  
  return (
    <aside className="app-sidebar" >
      <img src={Icon} alt="Happy" />
      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
      </button>
      </footer>
    </aside>
  )
}

 