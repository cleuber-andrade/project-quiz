import RespostaModel from "./resposta";
import { embaralhar } from "../function/arrays";

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #respostas: RespostaModel[]
  #acertou: boolean 


  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false){
    this.#id = id
    this.#enunciado = enunciado
    this.#respostas = respostas
    this.#acertou = acertou
  }

    
  get id(){
    return this.#id
  }

  get enunciado(){
    return this.#enunciado
  }

  get resposta(){
    return this.#respostas
  }
  
  get acertou(){
    return this.#acertou
  }

  get naoRespondida(){
    return !this.#respostas
  }

  get respondida(){
    for(let resposta of this.#respostas){
      if(resposta.revelada) return true
    }
    return false
  } 
  
  responderCom(indice: number): QuestaoModel{
    const acertou = this.#respostas[indice]?.certa
    const respostas = this.#respostas.map((resposta, i)=> {
      const respostaSelecionada = indice === i;
      const deveRevelar = respostaSelecionada || resposta.certa;
      return deveRevelar ? resposta.revelar() : resposta
    })
    return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
  }  

  embaralharRespostas(): QuestaoModel {
    let respostaEmbaralhadas = embaralhar(this.#respostas)
    return new QuestaoModel(this.#id, this.#enunciado, respostaEmbaralhadas, this.#acertou)
  }  

  static criarUsandoObjeto(objeto: QuestaoModel): QuestaoModel {
    const respostas = objeto.resposta.map(resp => RespostaModel.criarUsandoObj(resp))
    return new QuestaoModel(objeto.id, objeto.enunciado, respostas, objeto.acertou)
  }


  converterParaObjeto(){
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      resposta: this.#respostas.map(resp => resp.converterParaObjeto()),
      respondida: this.respondida,
      acertou: this.#acertou,
    }
  }
}