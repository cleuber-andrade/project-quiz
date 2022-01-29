import { useEffect, useRef, useState } from "react"
import Questao from "../components/Questao"
import Botao from "../components/Botao"
import QuestaoModel from "../model/questao"
import RespostaModel from "../model/resposta"

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Azul"),
  RespostaModel.errada("vermelho"),
  RespostaModel.certa("Cinza"),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);
  const questaoRef = useRef<QuestaoModel>();

  useEffect(()=> {
    questaoRef.current = questao
  }, [questao])

  function respostaFornecida(indice: number){
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado(){   
    if(questaoRef.current.naoRespondida){
      setQuestao(questao.responderCom(-1))
    }    
  }

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Questao valor={questao}
        tempoParaResposta={15}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}/>

      <Botao texto="Proxima" href="/resultado"/>
    </div>
  )
}
