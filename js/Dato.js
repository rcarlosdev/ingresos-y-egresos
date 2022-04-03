class Dato{
    
    constructor(descripcion, valor){
        this.descripcion = descripcion;
        this.valor = valor;
    }

    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }
    getDescripcion(){
        return this.descripcion;
    }
    setValor(valor){
        this.valor = valor;
    }
    getValor(){
        return this.valor;
    }
}