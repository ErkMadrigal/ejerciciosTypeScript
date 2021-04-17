function imprimirConosla( constructorClase:Function ){

    console.log(constructorClase)

}

@imprimirConosla 

export class Xmen {

    constructor(
                public nombre : string,
                public clave  : string
    ){ }

    imprimir (){
        console.log(`${ this.nombre } - ${ this.clave}`);
    }
}