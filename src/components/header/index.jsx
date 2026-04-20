import styles from "./styles.module.scss"

import { useState, useEffect } from "react";

import { Container } from "./../container";
import { useActiveSection } from "../activeSection";

import { PawPrint, Menu, X } from "lucide-react";

import { AnimatePresence ,motion } from "framer-motion";

export function Header() {

  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

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
                <PawPrint size={30} color="#16B5A2"/>
                <p>PetDev</p>
            </a>

            <nav className={styles.navegacao}>
              <a className={activeSection === "services" ? styles.activeLink : "" } href="#services">Serviços</a>
              <a className={activeSection === "about" ? styles.activeLink : "" } href="#about">Sobre</a>
              <a className={activeSection === "testimonials" ? styles.activeLink : "" } href="#testimonials">Depoimentos</a>
              <a className={activeSection === "contact" ? styles.activeLink : "" }href="#contact">Contato</a>
            </nav>

            <a 
              href="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnAgendar}
            >
              Agendar
            </a>

            <div className={styles.btnMenu}>
                {open ? (
                  <X size={35} color="#0FAB46" onClick={toggleMenu}/>
                ):(
                  <Menu size={35} color="#0FAB46" onClick={toggleMenu}/>
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
            <li>
              <a 
                href="#services" 
                onClick={() => setOpen(false)}
                className={activeSection === "services" ? styles.activeLink : "" }
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => setOpen(false)}
                className={activeSection === "about" ? styles.activeLink : "" }
              >
                Sobre
              </a>
            </li>
            <li>
              <a 
                href="#testimonials"
                onClick={() => setOpen(false)}
                className={activeSection === "testimonials" ? styles.activeLink : "" }
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={() => setOpen(false)}
                className={activeSection === "contact" ? styles.activeLink : "" }
              >
                Contato
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnAgendarMobile}
              >
                Agendar
              </a>
            </li>
          </ul>
      </div>
      
    </>
  );
}
