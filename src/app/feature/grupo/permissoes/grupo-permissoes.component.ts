import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: "<h1>Permissões de {{data}}</h1>"
})
export class GrupoPermissoesComponent {
    @Input() data : any
}