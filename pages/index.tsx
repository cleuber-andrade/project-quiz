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

  async function carregarQuestao(idQuestao: number){
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    
  }

  useEffect(()=>{
    carregarIdsDasQuestoes()
  },[])

  useEffect(()=>{
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]) 
  },[idsDasQuestoes])

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
