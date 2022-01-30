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
  const [idsDasQuestoes, setidsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    console.log(idsDasQuestoes);
    setidsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();  
    console.log(QuestaoModel.criarUsandoObjeto(json));  
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao)
  }

  useEffect(()=> {
    carregarIdsDasQuestoes();
  },[])

  useEffect(()=> {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  },[idsDasQuestoes])

  function IdProximaPergunda() {

  }  

  function questaoRespondida(questaoResposta : QuestaoModel){
    setQuestao(questaoResposta)
    const acertou =questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    console.log()
  }

  function irParaProximoPasso() {

  }

  return (
    <div>
      <Questionario 
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
      />
    </div>
  )
}
