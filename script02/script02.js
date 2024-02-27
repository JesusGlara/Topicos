const contenedores = document.querySelectorAll('div');
const colores = [];

contenedores.forEach((item) => {
    item.style.height = '100px';
    const colorTexto = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const colorFondo = '#' + Math.floor(Math.random() * 16777215).toString(16);

    item.style.color = colorTexto;
    item.style.background = colorFondo;

    if (colores.includes(colorTexto) || colores.includes(colorFondo)) {
        console.log('Hay colores repetidos:', colorTexto, colorFondo);
    } else {
        console.log('Los colores no se repiten:', colorTexto, colorFondo);
    }

    colores.push(colorTexto, colorFondo);
});