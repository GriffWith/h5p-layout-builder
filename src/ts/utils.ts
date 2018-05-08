

export function getRandomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}
