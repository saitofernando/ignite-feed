import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (

      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

        <div className={styles.profile}>
          
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/76966991?v=4" />


          <strong>Fernando Saito</strong>
          <span>Web Developer</span>

          
        </div>

        <footer>
          <a href="#">
              <PencilLine size={20}/>
            Editar seu Perfil
          </a>
        </footer>
      </aside>
  )
}