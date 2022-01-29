import Link from "next/link";
import styles from "../styles/Botao.module.css";

interface BotaoPorps {
  texto: string
  href?: string
  onClick?: (e: any) => void
}

export default function Botao(props: BotaoPorps){

  function renderizarBotao(){
    <button className={styles.botao} onClick={props.onClick}>      
      {props.texto}
    </button>
  }

  return props.href ? (
    <Link href={props.href} passHref>
      {renderizarBotao}
    </Link>    
  ):  renderizarBotao()
}