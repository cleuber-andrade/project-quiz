import styles from "../styles/Estatisticas.module.css";

interface EstisticaProps{
  valor: any,
  texto: string,
  corFundo?:string,
  corFonte?: string   
}

export default function Estatistica(props: EstisticaProps){
  return (
    <div className={styles.estatistica}>
      <div className={styles.valor} style={{
        backgroundColor: props.corFundo ?? "#FDD60F",
        color: props.corFonte ?? "#333",
      }}>
        {props.valor}        
      </div>
      <div className={styles.texto}>
        {props.texto}
      </div>
    </div>
  )
}