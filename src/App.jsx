import styles from "./styles.module.scss";

import { Container } from "./components/container";
import { Header } from "./components/header";
import { CardService } from "./components/cardService";
import { CardTestimony } from "./components/cardTestimony";
import { CardInfo } from "./components/cardInfo";

import { Sparkles, House, ShoppingBag, Stethoscope, Phone, Mail, MapPin, PawPrint } from 'lucide-react';

import service1 from "./assets/services-1.png"
import service2 from "./assets/services-2.png"
import service3 from "./assets/services-3.png"
import service4 from "./assets/services-4.png"

import { motion } from "framer-motion";

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
      <section id="hero" className={styles.containerHero}>
        <Container>
          <div className={styles.containerContent}>
            <motion.div 
              className={styles.content}
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
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
            </motion.div>

            <motion.img 
              className={styles.img} 
              src={service4} 
              alt="" 
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        </Container>
      </section>

      <section id="services" className={styles.containerServices}>
        <h2 className={styles.titleSection}>Nossos Serviços</h2>
        <p>Tudo que seu pet precisa em um só lugar, com profissionais qualificados e muito carinho</p>

        <Container>
          <motion.div 
            className={styles.contentServices}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <CardService
                key={index}
                imgUrl={service.urlImg}
                icon={<service.icon size={35} color="white"/>}
                title={service.title}
                description={service.description}
              />
            ))}
          </motion.div>
        </Container>
      </section>
      <section id="about" className={styles.containerAbout}>
        <Container>
          <div className={styles.contentAbout}>

            <motion.div 
              className={styles.boxContentAbout}
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
            </motion.div>

            <motion.div 
              className={styles.boxImgsAbout}
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={service1} alt="Banho e Tosa" />
              <img src={service2} alt="Veterinário" />
              <img src={service3} alt="Creche Pet" />
              <img src={service4} alt="Pet Shop" />
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="testimonials" className={styles.containerTestimonials}>
        <Container>
            <div>
              <h2 className={styles.titleSection}>O que dizem nossos clientes</h2>
              <p>A satisfação de quem confia em nós é a nossa maior recompensa</p>

              <motion.div 
                className={styles.boxTestimonials}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {testimonials.map((item, index) => (
                  <CardTestimony
                    key={index}
                    testimony={item.testmony}
                    name={item.name}
                  />
                ))}
              </motion.div>
            </div>
        </Container>
      </section>
      <section id="contact" className={styles.containerContact}>
        <h2 className={styles.titleSection}>Entre em Contato</h2>
        <p>Estamos prontos para cuidar do seu pet com todo carinho</p>

        <Container>
          <motion.div 
            className={styles.boxCardsContact}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
              <CardInfo
                icon={<Phone color="white" size={45}/>}
                title="Telefone"
                info="(11) 99191-0000"
              />
              <CardInfo
                icon={<Mail color="white" size={45}/>}
                title="Email"
                info="contato@petdev.com.br"
              />
              <CardInfo
                icon={<MapPin color="white" size={45}/>}
                title="Endereço"
                info="Rua dos pets, 123 - São Paulo"
              />
              
          </motion.div>
        </Container>

      </section>
      <footer>
        <Container>
          <div className={styles.boxContentFooter}>
            <div className={styles.boxLogoFooter}>
                <div>
                  <PawPrint color="white" size={30}/>
                  <span>
                    PetDev
                  </span>
                </div>
                <p>Cuidando do seu pet com amor e dedicação desde 2014.</p>
            </div>

            <div className={styles.boxInfosFooter}>
              <p>Serviços:</p>
              <ul>
                <li>Banho e Tosa</li>
                <li>Veterinário</li>
                <li>Creche Pet</li>
                <li>Pet Shop</li>
              </ul>
            </div>
            <div className={styles.boxInfosFooter}>
              <p>Horários:</p>
              <ul>
                <li>Segunda a Sexta: 8h - 19h</li>
                <li>Sábado: 8h - 14h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
            <div className={styles.boxSocial}>
              <p>Redes Sociais</p>
              <ul>
                <li>f</li>
                <li>in</li>
                <li>ig</li>
              </ul>
            </div> 
          </div>

          <div className={styles.lineFooter}>
          </div>

          <p className={styles.copy}>&copy; {new Date().getFullYear()} PetDev. Todos os direitos reservados</p>
            
        </Container>
      </footer>
    </>
  );
}

export default App;
