import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: "<h1>Detalhes de {{data}}</h1>"
})
export class GrupoDetalhesComponent {
    @Input() data : any
}