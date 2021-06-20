export function addItem(payload) {
    return({ type: 'ADD_ITEM', payload })
}

export function deleteItem(payload) {
    return({ type: 'DELETE_ITEM', payload })
}