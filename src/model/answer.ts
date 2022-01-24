export default class ModelAnswer{
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false){
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static certa(valor: string) {
        return new ModelAnswer(valor, true)
    }
    
    static errada(valor: string) {
        return new ModelAnswer(valor, false)
    }

    get valor(){
        return this.#valor
    }

    get certa(){
        return this.#certa
    }

    get revelada(){
        return this.#revelada
    }

    showAnswer(){
        return new ModelAnswer(this.#valor, this.#certa, true)
    }

    toObject(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }
}