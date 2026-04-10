import styles from "./styles.module.scss"

import { useState, useEffect } from "react";

import { Container } from "./../container";
import { PawPrint, Menu, X } from "lucide-react";

import { AnimatePresence ,motion } from "framer-motion";

export function Header() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(open){
      document.body.classList.add("menu-open")
    }else{
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [open])

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


      <AnimatePresence>
          {open && (
            <motion.div 
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            >
            </ motion.div>
          )}
      </AnimatePresence>
      

      
        <div className={`${styles.menuMobile} ${open ? styles.open : ""}`}>

            <div className={styles.logo}>
                  <PawPrint size={35} color="#16B5A2"/>
                  <p>PetDev</p>
            </div>

            
          <ul>
            <li><a href="#services" onClick={() => setOpen(false)}>Serviços</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>Sobre</a></li>
            <li><a href="#testimonials" onClick={() => setOpen(false)}>Depoimentos</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contato</a></li>
            <li className={styles.btnAgendarMobile}>Agendar</li>
          </ul>
      </div>
      
    </>
  );
}
