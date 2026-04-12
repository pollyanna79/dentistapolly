import estilos from './depoimentos.module.css';
import Image from 'next/image';

export default function CardDepoimento(props){
    return(
        < div className={estilos.card_depoimento}>
        <Image className={estilos.img_aparelho}
        src={props.imagem}
        alt={props.nome}
        title={props.nome}
        width={300}
        height={300}
        />
        <h3>{props.nome}</h3>
        <p>{props.descricao}</p>
        </div>

    )
}