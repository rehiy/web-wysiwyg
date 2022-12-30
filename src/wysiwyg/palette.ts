export function WysiwygPalette(cb: (color: string) => void) {
    const table = document.createElement('table');
    table.className = 'wysiwyg-palette';

    for (let row = 1; row < 15; ++row) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 25; ++col) {
            let color: string;
            if (col === 24) {
                const gray = Math.floor(255 / 13 * (14 - row)).toString(16);
                const hexg = (gray.length < 2 ? '0' : '') + gray;
                color = '#' + hexg + hexg + hexg;
            } else {
                const hue = col / 24;
                const saturation = row <= 8 ? row / 8 : 1;
                const value = row > 8 ? (16 - row) / 8 : 1;
                color = HSVtoRGB(hue, saturation, value);
            }
            const td = document.createElement('td');
            td.style.backgroundColor = color;
            td.addEventListener('click', (e) => {
                e.preventDefault(), e.stopPropagation();
                cb(color);
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    return table;
}

function HSVtoRGB(h: number, s: number, v: number) {
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    let r: number;
    let g: number;
    let b: number;
    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    function hexPad(x: string) {
        return (x.length < 2 ? '0' : '') + x;
    }
    const hr = Math.floor(r * 255).toString(16);
    const hg = Math.floor(g * 255).toString(16);
    const hb = Math.floor(b * 255).toString(16);
    return '#' + hexPad(hr) + hexPad(hg) + hexPad(hb);
}
