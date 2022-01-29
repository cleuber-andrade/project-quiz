import { useEffect, useRef, useState } from "react"
import Questionario from "../components/Questionario"
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

  function questaoRespondida(questao: QuestaoModel){
    
  }

  function irParaProximoPasso() {

  }

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Questionario 
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
      />
    </div>
  )
}
