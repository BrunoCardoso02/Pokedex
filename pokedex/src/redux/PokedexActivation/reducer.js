import { ATIVAR_POKEDEX } from "../actions"
const initialState = {
    ativado: true
} 

export const ativacaoPokedex = (state = initialState, action) => {
    switch(action.type){
        case ATIVAR_POKEDEX:
            return {
                ...state,
                initialState: true
            }
            default:
                return {
                    state
                }
    }
}