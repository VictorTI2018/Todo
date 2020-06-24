
export const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = (value) => {
    let storage = localStorage.getItem(value)
    return JSON.parse(storage)
}

export const redirect = (url) => {
    window.location.replace(url)
}

export const formattedColorStatus = (status) => {
    let colors = ''
    switch (status) {
        case 'pending':
            colors = '#A52A2A'
            break;
        case 'completed':
            colors = '#006400'
            break;
        case 'cancel':
            colors = '#CD2626'
            break;
        default:
            colors = '#222'
            break;
    }
    return colors
}