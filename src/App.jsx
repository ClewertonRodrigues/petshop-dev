import styles from "./styles.module.scss";

import { Container } from "./components/container";
import { Header } from "./components/header";

import imgInicio from "./assets/services-4.png";

function App() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <Container>
          <div className={styles.containerContent}>
            <div className={styles.content}>
              <h1>
                Cuidado e <span>Amor</span> para seu Pet
              </h1>
              <p>
                Oferecemos serviços completos de pet shop, banho , tosa,
                veterinário e muito mais. Seu melhor amigo merece o melhor
                cuidado!
              </p>

              <div className={styles.boxButtons}>
                <a className={styles.btnAction}>Conhecer Serviços</a>
                <a className={styles.btnContact}>Fale Conosco</a>
              </div>
            </div>

            <img className={styles.img} src={imgInicio} alt="" />
          </div>
        </Container>
      </section>
    </>
  );
}

export default App;
