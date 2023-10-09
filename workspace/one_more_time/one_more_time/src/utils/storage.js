export const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const deleteItem = (key) => {
    window.localStorage.removeItem(key);
}

export const getItem = (key) => {
    return window.localStorage.getItem(key);
}