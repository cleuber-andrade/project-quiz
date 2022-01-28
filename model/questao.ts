import RespostaModel from "./resposta";

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #resposta: RespostaModel[]
  #acertou: boolean

  //#respondida: boolean


  constructor(id: number, enunciado: string, resposta: RespostaModel[], acertou: boolean){
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

  converterParaObjeto(){
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      resposta: this.#resposta.map(resp => resp.converterParaObjeto()),
      acertou: this.#acertou,
    }
  }
}