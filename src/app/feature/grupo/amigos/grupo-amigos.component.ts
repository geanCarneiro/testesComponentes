import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: "<h1>Amigos de {{data}}</h1>"
})
export class GrupoAmigosComponent {
    
        @Input() data : any;

}