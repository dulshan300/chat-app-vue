export const limitText = (text, limit = 40) => {
    if (text.length > limit) {
        return text.slice(0, limit) + ' ...';
    } else {
        return text
    }
}