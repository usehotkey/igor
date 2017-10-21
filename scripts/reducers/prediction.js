export const selectPages = (amount) => ({ type: 'SELECT_PAGES', amount })
export const selectLines = (amount) => ({ type: 'SELECT_LINES', amount })

export const prediction = (state = { pages: '', lines: '' }, action) => {
    switch (action.type) {
        case 'SELECT_PAGES':
            return { ...state, pages: action.amount }
        case 'SELECT_LINES':
            return { ...state, lines: action.amount }
        default:
            return state
    }
}
