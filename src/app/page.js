import estilos from "./page.module.css";
import Image from "next/image";
import CardDepoimento from "./componentes/depoimentos/indexdepoimentos.jsx";
import MolduraInformacoes from "./componentes/moldurainformacoes/index.jsx";



export default function Home() {
  return (
    <>
    <header className={estilos.topo}>
      <div className={estilos.container_logo}>
        <Image
          src= "/dente.png"
          alt="logo dentes saudáveis"
          title="logo dentes saudáveis"
          width={50}  
        height={50}
        />
        <p>Dentes Saudáveis</p>
      </div>
    </header>

    {/* Apresentação */}
    <section className={estilos.secao_apresentacao}>
      <div className={estilos.container_texto_apresentacao}>
        <h1>
          Os melhores <span>aparelhos dentários</span>!
        </h1>
        <p>
          Confira abaixo todas as especialidades odontológicas que temos à sua
          disposição!
        </p>
      </div>

      <ul className={estilos.lista_servicos}>
        <li>
          <Image src="/dente.png" alt="logo" title="logo" width={50} 
    height={50} />
          <p>Pré-avaliação</p>
        </li>

        <li>
          <Image src="/dente.png" alt="logo" title="logo" width={50} 
    height={50} />
          <p>Aparelhos Dentários</p>
        </li>

        <li>
          <Image src="/dente.png" alt="logo" title="logo" width={50} 
    height={50} />
          <p>Raio-X digital</p>
        </li>

        <li>
          <Image src="/dente.png" alt="logo" title="logo" width={50} 
    height={50} />
          <p>Clareamento dental</p>
        </li>
      </ul>
    </section>

    {/* Secao beneficios */}
    <section className={estilos.secao_beneficios}>
      <div>
        <h2 className={estilos.subtitulo}>
          Por que usar <span>aparelho?</span>
        </h2>
        <figure className={estilos.container_img_aparelho}>
          <Image
            src="/aparelho.png"
            alt="Imagem do uso de um aparelho"
            title="Imagem do uso de um aparelho"
            width={350}
            height={400}

          />
        </figure>
      </div>

      <ul className={estilos.lista_beneficios}>
        <li>
          <h3>Alinhar os dentes</h3>
          <p>
            Dentes desalinhados causam problemas nos dentes e podem afetar a
            digestão dos alimentos e a respiração.
          </p>
        </li>

        <li>
          <h3>Melhorar a dicção e a higiene dentária</h3>
          <p>
            Muitas pessoas não conseguem nem usar fio dental devido à posição
            da sua dentição. Contudo, a correção possibilita o cuidado com a
            saúde bucal de forma bem mais ampla.
          </p>
        </li>

        <li>
          <h3>Corrigir espaço entre os dentes</h3>
          <p>
            Uma dentição desalinhada e com espaços significativos incomodam
            muitas pessoas. Usar aparelho nos dentes é uma das formas mais
            eficientes para que esses problemas possam ser corrigidos.
          </p>
        </li>
      </ul>
    </section>

    {/* container depoimentos */}
    <section className={estilos.secao_depoimentos}>
      <h2 className={estilos.subtitulo}>
        Veja o que nossos <span>clientes</span> estão falando...
      </h2>

      <div className={estilos.container_depoimentos}>
        <CardDepoimento
          imagem="/cliente01.png"
          nome={"Alberto"}
          descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
        />
        <CardDepoimento
          imagem="/cliente02.png"
          nome={"Eliana"}
          descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
        />
        <CardDepoimento
          imagem="/cliente03.png"
          nome={"Carla"}
          descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
        />
      </div>
    </section>

    {/* Seção Informações */}
    <section className={estilos.secao_informacoes}>
      
        <MolduraInformacoes>
          
          <h2>Horários e dia de Atendimento</h2>
       < ul className={estilos.lista_horarios}>
            <li>Segunda - 09:00 às 18:00</li>
            <li>Terça - 09:00 às 18:00</li>
            <li>Quarta - 09:00 às 18:00</li>
            <li>Quinta - 09:00 às 18:00</li>
            <li>Sexta - 09:00 às 17:00</li>
            <li>Sábado - 09:00 às 12:00</li>
          </ul>
          </MolduraInformacoes>
        
        
        
       <MolduraInformacoes>
  <h2>Médicos</h2>
  
  <div className={estilos.container_medicos}> {/* Novo container pai */}
    
    {/* Card do Médico 1 */}
    <div className={estilos.card_individual}>
      <Image
        className={estilos.img_medico}
        src="/dentista01.png"
        alt="Dra. Ana"
        width={200}
        height={200}
      />
      <div className={estilos.info_texto}>
        <p><strong>Dra. Ana</strong> - Ortodontista</p>
        <p>Segundas e sextas</p>
      </div>
    </div>

    {/* Card do Médico 2 */}
    <div className={estilos.card_individual}>
      <Image
        className={estilos.img_medico}
        src="/dentista02.png"
        alt="Dr. Carlos"
        width={200}
        height={200}
      />
      <div className={estilos.info_texto}>
        <p><strong>Dr. Carlos</strong> - Endodontia</p>
        <p>Terças e quartas</p>
      </div>
    </div>

  </div>
</MolduraInformacoes>  
 <MolduraInformacoes>
 <h2>Contatos</h2>
  <div className={estilos.fones}>
 <p>Ligue para agendar uma consulta:</p>
   <p style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
   <span>📞</span> (21) 3699 - 9999
    </p>

    {/* Ícone de Celular/WhatsApp (Emoji) */}
    <p style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
      <span>📱</span> (21) 97788 - 5566
    </p>
          </div>
          </MolduraInformacoes>
        </section>
    {/* Seção localização */}
    <section className={estilos.secao_localizacao}>
      <div>
        <h2 className={estilos.subtitulo}>
          Onde estamos <span>localizados?</span>
        </h2>
        <p>
          Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP:
          22775-904
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr"
        width="100%"
        height="350"
      ></iframe>
    </section>

    {/* Rodapé */}
    <footer className={estilos.rodape}>
      <div>© Copyright 2021 | Consultório dentes saudáveis</div>
    </footer>
  </>
)
}