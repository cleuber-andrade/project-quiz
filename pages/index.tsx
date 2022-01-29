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

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const[idsDasQuestoes, setIdsDasQuestoes] = useState([]);
  const [questao, setQuestao] = useState(questaoMock);  

  async function carregarIdsDasQuestoes(){
    const resp = await fetch(`${BASE_URL}/questionario`)
    const identificardorDasQuestoes = await resp.json()
    setIdsDasQuestoes(identificardorDasQuestoes)
  }

  function questaoRespondida(questao: QuestaoModel){
    
  }

  function irParaProximoPasso() {

  }

  return (
    <div>
      <Questionario 
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
      />
    </div>
  )
}
