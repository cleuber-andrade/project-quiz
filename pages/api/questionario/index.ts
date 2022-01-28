import { emparalhar } from "../../../function/arrays";
import questoes from "../bancoDeQuestoes";

export default function questionario (req, res){  
  const ids = questoes.map(questao => questao.id)
  res.status(200).json(emparalhar(ids))
}