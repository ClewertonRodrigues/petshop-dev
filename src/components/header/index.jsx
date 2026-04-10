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

            <a href="#hero" className={styles.logo}>
                <PawPrint size={35} color="#16B5A2"/>
                <p>PetDev</p>
            </a>

            <nav className={styles.navegacao}>
              <a href="#services">Serviços</a>
              <a href="#about">Sobre</a>
              <a href="#testimonials">Depoimentos</a>
              <a href="#contact">Contato</a>
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
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
            <li>Agendar</li>
          </ol>
      </div>
      
    </>
  );
}
