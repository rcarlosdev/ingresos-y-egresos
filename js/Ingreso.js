class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        this.id = ++Ingreso.contadorIngresos;
        super(descripcion, valor);
    }

    get id(){
        return this.id;
    }

}