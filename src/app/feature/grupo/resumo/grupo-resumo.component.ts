import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: '<h1>Resumo de {{data}}</h1>'
})
export class GrupoResumoComponent {

    @Input('data') public data : any;



}