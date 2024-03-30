const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');
const baseFontSize = 16;

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value + 'px';
    textSpan.style.fontSize = fontSize;
});