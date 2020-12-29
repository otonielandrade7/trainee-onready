const vehiculos = [
    {
        marca: 'Peugeot',
        modelo: '206',
        puertas: '4',
        precio: 200000.00,
        cilindrada: null
    },
    {
        marca: 'Honda',
        modelo: 'Titan',
        puertas: null,
        precio: 60000.00,
        cilindrada: '125cc',
    },
    {
        marca: 'Peugeot',
        modelo: '208',
        puertas: '5',
        precio: 250000.00,
        cilindrada: null,
    },
    {
        marca: 'Yamaha',
        modelo: 'YBR',
        puertas: null,
        precio: '80500.50',
        cilindrada: '160cc',
    },
]
class Vehiculos {
    constructor(vehiculos) {
        this.vehiculos = vehiculos;
    }
    imprimir() {
        console.log(typeof this.vehiculos);
        this.vehiculos.forEach(element => {
            const formatedPrice = new Intl.NumberFormat("de-DE").format(element.precio);
            if (element.cilindrada === null) {
                console.log(`Marca: ${element.marca} // Modelo: ${element.modelo} // Puertas: ${element.puertas} // Precio: $${formatedPrice}`);
            } else if (element.puertas === null) {
                console.log(`Marca: ${element.marca} // Modelo: ${element.modelo} // Cilindrada: ${element.cilindrada} // Precio: $${formatedPrice}`);
            }
        });
        console.log('=============================');
        this.especificar();
    }
    ordenar() {
        return this.vehiculos.sort((a, b) => {
            return b.precio - a.precio;
        });
    }
    especificar() {
        let precio = this.ordenar();
        const letras = this.vehiculos.filter(vehiculo => vehiculo.modelo.includes('Y'));
        const formatedPrice = new Intl.NumberFormat("de-DE").format(letras[0].precio);
        console.log('Vehículo más caro:', precio[0].marca, precio[0].modelo);
        console.log('Vehículo más barato:', precio[precio.length - 1].marca, precio[precio.length - 1].modelo);
        console.log('Vehículo que contiene en el modelo la letra ‘Y’:', letras[0].marca, letras[0].modelo, `$${formatedPrice}`);
        console.log('=============================');
        console.log('Vehículos ordenados por precio de mayor a menor:');
        precio.forEach(element => console.log(element.marca, element.modelo))
    }

}
const misVehiculos = new Vehiculos(vehiculos);
misVehiculos.imprimir();
