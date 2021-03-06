System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this.negociacoes = [];
                }
                adiciona(negociacao) {
                    this.negociacoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this.negociacoes);
                }
                paraTexto() {
                    console.log(JSON.stringify(this.negociacoes));
                }
                ehIgual(negociacoes) {
                    return JSON.stringify(this.negociacoes) == JSON.stringify(negociacoes.negociacoes);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
