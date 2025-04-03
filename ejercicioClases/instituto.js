// Escribe aquí tu código

let Alumno = class {
    constructor(codigo, nombre, apellido1, apellido2, dni) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.dni = dni;
        this.notas = [];
    }

    agregarNotas(...notas) {
        this.notas.push(...notas);
    }

    obtenerCorreoCorporativo(dominio) {
        let dniSinLetra = this.dni.slice(0, -1);
        const nombreUsuario = this.nombre.charAt(0).toLowerCase() + this.apellido1.toLowerCase().slice(0, 3) + this.apellido2.toLowerCase().slice(0, 3) + dniSinLetra.slice(-3 );
        return `${nombreUsuario}@${dominio}`;
    }

    obtenerNotasMedias() {
        
    }


}

let Aula = class {
    constructor(numeroAula, nombreAula) {
        this.numeroAula = numeroAula;
        this.nombreAula = nombreAula;
        this.alumnos = [];  
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    get numeroAlumnos() {
        return this.alumnos.length;
    }
}