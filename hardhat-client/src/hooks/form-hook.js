import { useReducer } from 'react'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'text':
            return {
                ...state,
                [action.key]: action.value,
            }
            default:
                return state
            }
        }

export const useFormInputs = (initialState) => {
    const [inputs, dispatch] = useReducer(inputReducer, initialState)

    const handleInputChange = (e) => {
        dispatch({type: 'text', key:[e.target.name], value: e.target.value})
    }

    return { inputs, handleInputChange }
}