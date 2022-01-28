import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

const letras = [
  {valor: "A", cor: "#f2c866"},
  {valor: "B", cor: "#f266ba"},
  {valor: "C", cor: "#85d4f2"},
  {valor: "D", cor: "#bce596"},
]

interface QuestaoProps {
  valor: QuestaoModel 
  respostaFornecida: (indice: number) => void
}

export default function Questao(props: QuestaoProps){
  const questao = props.valor;

  function renderizarRespostas(){
    return questao.resposta.map((resp, i)=> {
      return <Resposta
        key={i}
        valor={resp}
        indice={i}
        letra={letras[i].valor}
        corFundoLetra={letras[i].cor}
        respostaFornecida={props.respostaFornecida}
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