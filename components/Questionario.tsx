import QuestaoModel from "../model/questao";


interface QuestionarioProps {
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irParaProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps){
  return(
    <div>

    </div>
  )
}