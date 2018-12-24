System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar = false) {
                    this.elemento = $(seletor);
                    this.escapar = escapar;
                }
                update(model) {
                    let template = this.template(model);
                    if (this.escapar) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    }
                    this.elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
