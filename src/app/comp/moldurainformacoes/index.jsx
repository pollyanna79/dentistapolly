import estilos from './moldurainformacoes.module.css';
export default function MolduraInformacoes(props){
    return(
        <div className={estilos.moldura}>
            
            <div className={estilos.info}>{props.children}</div>
        </div>
    )
}