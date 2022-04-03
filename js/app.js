const ingresos = [
    new Ingreso('Salario', 1000000),
    new Ingreso('Ventas', 500000),
];

const egresos = [
    new Egreso('Renta', 600000),
    new Egreso('Compras', 400000),
];

const cargarDatos = () => {
    ingresos.forEach(ingreso => {
        document.querySelector('#list-items-ingreso').appendChild(crearElementoLista(ingreso));
    });

    egresos.forEach(egreso => {
        document.querySelector('#list-items-egreso').appendChild(crearElementoLista(egreso));
    });
    actualizarSaldo();
}

const crearElementoLista = (item) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `<span class="contenido">${item.descripcion}: ${item.valor}</span>
                    <span class="eliminar"><i class="fa-solid fa-xmark"></i></span>`;
    return li;
}

const actualizarSaldo = () => {
    const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
    const totalEgresos = egresos.reduce((total, egreso) => total + egreso.valor, 0);
    const porcEgresos = ((totalEgresos*100) / totalIngresos).toFixed(2);
    const total = totalIngresos - totalEgresos;
    
    document.querySelector('#tt-disponible').innerHTML = formatoMoneda(total);
    document.querySelector('#tt-ingresos').innerHTML = formatoMoneda(totalIngresos);
    document.querySelector('#tt-egresos').innerHTML = `${formatoMoneda(totalEgresos)} <span class="" style="font-size: .7rem; background-color: rgba(255, 255, 255, 0.464); border-radius:3px; padding:2px;">${porcEgresos}%</span>`;
}

const formatoMoneda = (numero) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency',  currency: 'COP', minimumFractionDigits: 0 }).format(numero);
}

const totalIngresos = () => {
    const total = ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
    return total;
}

const totalEgresos = () => {
    const total = egresos.reduce((total, egreso) => total + egreso.valor, 0);
    return total;
}

document.getElementById('btn-add').addEventListener('click', () => {
    let valor = document.getElementById('input-valor').value;
    let descripcion = document.getElementById('input-descripcion').value;
    let msg = document.getElementById('span-msg');
    
    if (descripcion === '' || valor === '') {
        msg.innerHTML = 'Ingrese una descripción y un valor';
        document.getElementById('input-descripcion').focus();

        setTimeout(() => {
            msg.innerHTML = '';
        }, 2000);
    } else {
        addItem();
    }
});

const addItem = () => {
    let tipo_item = document.getElementById('select-tipo').value;
    let ul = document.getElementById(`list-items-${tipo_item}`);
    let descripcion = document.getElementById('input-descripcion').value;
    let valor = document.getElementById('input-valor').value;

    if (tipo_item === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, Number(valor)));
        ul.appendChild(crearElementoLista(ingresos[ingresos.length - 1]));
    } else {
        egresos.push(new Egreso(descripcion, Number(valor)));
        ul.appendChild(crearElementoLista(egresos[egresos.length - 1]));
    }
    actualizarSaldo();
}

document.addEventListener("DOMContentLoaded", () => {
    cargarDatos();
});