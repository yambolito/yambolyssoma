document.addEventListener('DOMContentLoaded', function () {
    const denunciaForm = document.getElementById('denunciaForm');
    const descargarCSVButton = document.getElementById('descargarCSV');
    const agradecimientoDiv = document.getElementById('agradecimiento');
    const data = [];

    denunciaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const descripcion = document.getElementById('descripcion').value;

        data.push({ nombre, edad, descripcion });

        denunciaForm.reset();

        // Mostrar el mensaje de agradecimiento
        agradecimientoDiv.style.display = 'block';

        // Ocultar el mensaje después de 5 segundos
        setTimeout(function () {
            agradecimientoDiv.style.display = 'none';
        }, 5000); // 5000 milisegundos (5 segundos)
    });

    descargarCSVButton.addEventListener('click', function () {
        if (data.length === 0) {
            alert('No hay datos para descargar.');
            return;
        }

        const csvData = JSON2CSV(data);

        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'denuncias.csv');
    });

    function JSON2CSV(objArray) {
        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';

        for (let i = 0; i < array.length; i++) {
            let line = '';
            for (let index in array[i]) {
                if (line !== '') line += ',';

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }
});