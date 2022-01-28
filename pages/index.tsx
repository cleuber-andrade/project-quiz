import Questao from "../components/Questao"
import QuestaoModel from "../model/questao"
import RespostaModel from "../model/resposta"

export default function Home() {
  const questaoteste = new QuestaoModel(1, "Melhor cor?", [
    RespostaModel.errada("Verde"),
    RespostaModel.errada("Azul"),
    RespostaModel.errada("vermelho"),
    RespostaModel.certa("Cinza"),
  ])
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",}}>
      <Questao valor={questaoteste}/>
    </div>
  )
}
