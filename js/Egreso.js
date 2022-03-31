class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        this.id = ++Egreso.contadorEgresos;
        super(descripcion, valor);
    }

    get id(){
        return this.id;
    }
}