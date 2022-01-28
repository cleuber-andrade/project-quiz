import RespostaModel from "./resposta";
import { embaralhar } from "../function/arrays";

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #resposta: RespostaModel[]
  #acertou: boolean 


  constructor(id: number, enunciado: string, resposta: RespostaModel[], acertou = false){
    this.#id = id
    this.#enunciado = enunciado
    this.#resposta = resposta
    this.#acertou = acertou
  }

  get id(){
    return this.#id
  }

  get enunciado(){
    return this.#enunciado
  }

  get resposta(){
    return this.#resposta
  }
  
  get acertou(){
    return this.#acertou
  }

  get respondida(){
    for(let resposta of this.#resposta){
      if(resposta.revelada) return true
    }
    return false
  }

  responderCom(indice: number): QuestaoModel{
    const acertou = this.#resposta[indice]?.certa
    const respostas = this.resposta.map((resposta, i)=> {
      const respostaSelecionada = indice === i;
      const deveRevelar = respostaSelecionada || resposta.certa;
      return deveRevelar ? respostas.revelar() : respostas
    })
    return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
  }  

  embaralharRespostas(): QuestaoModel {
    let respostaEmbaralhadas = embaralhar(this.#resposta)
    return new QuestaoModel(this.#id, this.#enunciado, respostaEmbaralhadas, this.#acertou)
  }

  converterParaObjeto(){
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      resposta: this.#resposta.map(resp => resp.converterParaObjeto()),
      respondida: this.respondida,
      acertou: this.#acertou,
    }
  }
}