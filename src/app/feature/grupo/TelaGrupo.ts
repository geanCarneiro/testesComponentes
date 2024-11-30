import { ITelaCrud } from "../../componente/ITelaCrud";
import { GrupoAmigosComponent } from "./amigos/grupo-amigos.component";
import { GrupoDetalhesComponent } from "./detalhes/grupo-detalhes.component";
import { GrupoPermissoesComponent } from "./permissoes/grupo-permissoes.component";
import { GrupoResumoComponent } from "./resumo/grupo-resumo.component";

export const telaGrupo : ITelaCrud = {
    telaResumo : GrupoResumoComponent,
    subTelas : [
        {
            nome: "Detalhes",
            tela: GrupoDetalhesComponent
        },{
            nome: "Amigos",
            tela: GrupoAmigosComponent
        },{
            nome: "Permissoes",
            tela: GrupoPermissoesComponent
        }
    ]
    
}