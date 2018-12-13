class NegociacaoController{
    
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor(){
        this._inputData = <HTMLInputElement> document.querySelector("#data");
        this._inputQuantidade = <HTMLInputElement> document.querySelector("#quantidade");
        this._inputValor = <HTMLInputElement> document.querySelector("#valor");
    }

    adiciona(event: Event){
        event.preventDefault();
        const negociacao = new Negociacao(
            this._inputData.valueAsDate,
            this._inputQuantidade.valueAsNumber,
            this._inputValor.valueAsNumber
        );

    }

}