import styles from "./styles.module.scss"

import { useState } from "react";

import { Container } from "./../container";
import { PawPrint, Menu, X } from "lucide-react";

export function Header() {

  const [open, setOpen] = useState(false)

  function toggleMenu(){
    setOpen(prev => !prev)
  }

  return (
    <>
      <header>
        <Container>
          <div className={styles.headerContent}>

            <div className={styles.logo}>
                <PawPrint size={35} color="#16B5A2"/>
                <p>PetDev</p>
            </div>

            <nav className={styles.navegacao}>
              <a href="">Serviços</a>
              <a href="">Sobre</a>
              <a href="">Depoimentos</a>
              <a href="">Contato</a>
            </nav>

            <a className={styles.btnAgendar} href="">Agendar</a>

            <div className={styles.btnMenu}>
                {open ? (
                  <X size={40} color="#0FAB46" onClick={toggleMenu}/>
                ):(
                  <Menu size={40} color="#0FAB46" onClick={toggleMenu}/>
                )}
            </div>

          </div>
        </Container>
      </header>

      
        <div className={`${styles.menuMobile} ${open ? styles.open : ""}`}>

            <div className={styles.logo}>
                  <PawPrint size={35} color="#16B5A2"/>
                  <p>PetDev</p>
            </div>

            
          <ol>
            <li><a>Serviços</a></li>
            <li><a>Sobre</a></li>
            <li><a>Depoimentos</a></li>
            <li><a>Contato</a></li>
            <li>Agendar</li>
          </ol>
      </div>
      
    </>
  );
}
