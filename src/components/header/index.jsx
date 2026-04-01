import styles from "./styles.module.scss"

import { useState } from "react";

import { Container } from "./../container";
import { PawPrint, Menu, X } from "lucide-react";

export function Header() {

  const [open, setOpen] = useState(false)

  function openMenu(){
    if(open){
      setOpen(false)
    }else{
      setOpen(true)
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <Container>
          <div className={styles.headerContent}>

            <div className={styles.logo}>
                <PawPrint size={35} color="#16B5A2"/>
                <p>PetDev</p>
            </div>
            

            <div className={styles.menu}>
                {open ? (
                  <X size={35} color="#0FAB46" onClick={openMenu}/>
                ):(
                  <Menu size={35} color="#0FAB46" onClick={openMenu}/>
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
      
    </div>
  );
}
