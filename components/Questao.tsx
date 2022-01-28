import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

interface QuestaoProps {
  valor: QuestaoModel 
}

export default function Questao(props: QuestaoProps){
  const questao = props.valor;

  function renderizarRespostas(){
    return questao.resposta.map((resp, i)=> {
      return <Resposta
        key={i}
        valor={resp}
        indice={i}
        letra="A"
        corLetra="#f2c866"
      /> 
    })
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado}/>
      {renderizarRespostas()}
    </div>
  )
}