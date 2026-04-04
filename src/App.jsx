import styles from "./styles.module.scss";

import { Container } from "./components/container";
import { Header } from "./components/header";
import { CardService } from "./components/cardService";
import { CardTestimony } from "./components/cardTestimony";

import { Sparkles, House, ShoppingBag, Stethoscope } from 'lucide-react';

import service1 from "./assets/services-1.png"
import service2 from "./assets/services-2.png"
import service3 from "./assets/services-3.png"
import service4 from "./assets/services-4.png"

function App() {

  const services = [
    {
      urlImg: service1,
      icon: Sparkles,
      title: "Banho e Tosa",
      description: "Tratamento completo de higiene e beleza para seu pet, com produtos de qualidade premium."
    },
    {
      urlImg: service2,
      icon: Stethoscope,
      title: "Veterinário",
      description: "Consultas, vacinas e exames com profissionais experientes e atenciosos."
    },
    {
      urlImg: service3,
      icon: House,
      title: "Creche Pet",
      description: "Espaço seguro e divertido para seu pet brincar e socializar enquanto você trabalha."
    },
    {
      urlImg: service4,
      icon: ShoppingBag,
      title: "Pet Shop",
      description: "Rações, brinquedos, acessórios e tudo que seu pet precisa em um só lugar."
    },
  ]

  const testimonials = [
    {
      testmony: "Meu cachorro adora ir ao petshop! O atendimento é excepcional e os profissionais são muitos carinhosos.",
      name: "Maria Silva"
    },
    {
      testmony: "Melhor petshop da região! Preços justos e serviços de qualidade. Super recomendo!",
      name: "João Santos"
    },
    {
      testmony: "A creche é maravilhosa! Fico tranquila sabendo que meu pet está em boas mãos.",
      name: "Ana Costa"
    },
  ]

  return (
    <>
      <Header />
      <section className={styles.containerHero}>
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

            <img className={styles.img} src={service4} alt="" />
          </div>
        </Container>
      </section>

      <section className={styles.containerServices}>
        <h2 className={styles.titleSection}>Nossos Serviços</h2>
        <p>Tudo que seu pet precisa em um só lugar, com profissionais qualificados e muito carinho</p>

        <Container>
          <div className={styles.contentServices}>
            {services.map((service, index) => (
              <CardService
                key={index}
                imgUrl={service.urlImg}
                icon={<service.icon size={35} color="white"/>}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </Container>
      </section>
      <section className={styles.containerAbout}>
        <Container>
          <div className={styles.contentAbout}>

            <div className={styles.boxContentAbout}>
                <h2 className={styles.titleSection}>Sobre Nós</h2>
                <p>Somos um petshop completo, dedicado a oferecer os melhores serviços e produtos para seu animal de estimação. Com mais de 10 anos de experiência, nossa equipe de profissionais qualificados trabalha com amor e dedicalção.</p>
                <p>Acreditamos que cada pet é único e merece um atendimento personalizado. Por isso, oferecemos desde cuidados básicos até serviços especializados, sempre priorizando o bem-estar e a felicidade do seu melhor amigo.</p>

                <div className={styles.boxInfosAbout}>
                  <article>
                    <strong className={styles.numberYear}>10+</strong>
                    <span>Anos</span>
                  </article>
                  <article>
                    <strong className={styles.numberClient}>5000+</strong>
                    <span>Clientes</span>
                  </article>
                  <article>
                    <strong className={styles.numberProfessionals}>15</strong>
                    <span>Profissionais</span>
                  </article>
                </div>
            </div>

            <div className={styles.boxImgsAbout}>
              <img src={service1} alt="Banho e Tosa" />
              <img src={service2} alt="Veterinário" />
              <img src={service3} alt="Creche Pet" />
              <img src={service4} alt="Pet Shop" />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.containerTestimonials}>
        <Container>
            <div>
              <h2 className={styles.titleSection}>O que dizem nossos clientes</h2>
              <p>A satisfação de quem confia em nós é a nossa maior recompensa</p>

              <div className={styles.boxTestimonials}>
                {testimonials.map((item, index) => (
                  <CardTestimony
                    key={index}
                    testimony={item.testmony}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
        </Container>
      </section>
    </>
  );
}

export default App;
