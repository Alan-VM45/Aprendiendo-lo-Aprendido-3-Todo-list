enum TareaEstado{
    pendiente = "pendiente",
    completada = "completada",
    enProgreso = "en progreso"
}

class Tarea{
    readonly id: number;
    nombre: string;
    estado?: TareaEstado;

    constructor(init : {id: number, nombre: string, estado?: TareaEstado}){
        this.id = init.id;
        this.nombre = init.nombre;
    }
    completar(){
        this.estado = TareaEstado.completada;
    }
    enProgreso(){
        this.estado = TareaEstado.enProgreso;
    }
}

function main(): void {
    let tarea = new Tarea({id: 1, nombre: "Tarea 1"});
    console.log(tarea);
    tarea.completar();
    console.log(tarea);
};  
main();