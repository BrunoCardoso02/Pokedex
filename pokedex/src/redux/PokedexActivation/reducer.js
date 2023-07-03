import { ATIVAR_POKEDEX } from "../actions"
const initialState = {
    ativado: false
} 

export const ativacaoPokedex = (state = initialState, action) => {
    switch(action.type){
        case ATIVAR_POKEDEX:
            return {
                ...state,
                ativado: !state.ativado
            }
            default:
                return state              
    }
}