import estilos from './moldurainformacoes.module.css';
export default function MolduraInformacoes(props){
    return(
        <div className={estilos.moldura}>
            <h3>Informações</h3>
            <div className={estilos.info}>{props.children}</div>
        </div>
    )
}