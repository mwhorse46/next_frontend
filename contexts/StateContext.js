import { createContext, useReducer } from "react"
const initialState ={
    isOpen:false,
    isSortOpen:false,
    isFilterOpen:false,
    isSortPcOpen:false
}
export const StateContext = createContext({})
export const StateProvider =({children})=>{
    const reducer =(state, action)=>{
        switch(action.type){
            case 'ShowAdvancedModal':
                return {
                    ...state,
                    isOpen:!state.isOpen,
                }
            case 'HideAdvancedModal':
                return {
                    ...state,
                    isOpen:false,
                }
            case 'ShowSortModal':
                return {
                    ...state,
                    isSortOpen:!state.isSortOpen,
                }
            case 'HideSortModal':
                return {
                    ...state,
                    isSortOpen:false,
                }
            case 'ShowFilterModal':
                return {
                    ...state,
                    isFilterOpen:!state.isFilterOpen,
                }
            case 'HideFilterModal':
                return {
                    ...state,
                    isFilterOpen:false,
                }
            case 'ShowSortPcModal':
                return {
                    ...state,
                    isSortPcOpen:true
                }
            case 'HideSortPcModal':
                return {
                    ...state,
                    isSortPcOpen:false,
                }
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}