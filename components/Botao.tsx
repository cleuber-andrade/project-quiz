import Link from "next/link";
import styles from "../styles/Botao.module.css";

interface BotaoPorps {
  texto: string
  href?: string
  onClick?: (e: any) => void
}

export default function Botao(props: BotaoPorps){

  function renderizaBotao(){
    <button className={styles.botao} onClick={props.onClick}>      
      {props.texto}
    </button>
  }

  return props.href ? (
    <Link href={props.href} passHref>
      {renderizaBotao}
    </Link>    
  ):  renderizaBotao()
}