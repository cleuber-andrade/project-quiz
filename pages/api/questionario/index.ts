import questoes from "../bancoDeQuestoes";

export default function questionario (req, res){  
  res.status(200).json(questoes.map(questao => questao.id))
}