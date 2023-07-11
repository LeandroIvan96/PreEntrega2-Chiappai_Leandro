function initProgram() {

    var selectSection = parseInt(prompt("Bienvenido, elija su opcion \n 1. Cargar Datos \n 2. Salir "));

    while (selectSection != 2) {
        if (selectSection === 1) {
            selectSection = Carga_de_Datos()
            }
        else {
        alert("No ingresaste una opción valida")
        selectSection = parseInt(prompt("Bienvenido, elija su opcion \n 1. Cargar Datos \n 2. Salir "));
        }
        selectSection = parseInt(prompt("Bienvenido, elija su opcion \n 1. Cargar Datos \n 2. Salir "));;
    }
    alert("Hasta luego.")
}

function Carga_de_Datos(){

    let Curso = [];
    let cantidad_alumnos = parseInt(prompt("Ingrese la cantidad de Alumnos a cargar: "));

    for (let i = 0; i < cantidad_alumnos; i++) {


        let nombre = prompt("Ingrese el nombre del Alumno: ");
        let apellido = prompt("Ingrese el apellido del Alumno");
        let nota1 = parseInt(prompt("Ingrese la nota del 1° parcial: "));
        let nota2 = parseInt(prompt("Ingrese la nota del 2° parcial: "));
        let nota3 = parseInt(prompt("Ingrese la nota del 3° parcial: "));
        let notaFinal = parseInt((nota1 + nota2 + nota3) / 3);
        let aprobado;
        if(notaFinal <= 6){
            aprobado = false;
        }
        else{
            aprobado = true;
        }
                
        const NotasAlumno = {
            nombre,
            apellido,
            nota1,
            nota2,
            nota3,
            notaFinal,
            aprobado,
        }

    Curso.push(NotasAlumno);
  }

  console.log("Los datos cargados son: " + Curso);

  var opcion = parseInt(prompt("¿Qué desea saber? \n 1. Mostrar Aprobados y Desaprobados \n 2. Mostrar Mejor y Peor Promedio \n 3.Salir"));

  while (opcion != 3) {
    if (opcion === 1) {
        mostrar_Aprobados(Curso)
        }
    else if (opcion === 2){
        mostrar_Mejor_Promedio(Curso)
    }
    else {
    alert("No ingresaste una opción valida")
    opcion = opcion = parseInt(prompt("¿Qué desea saber? \n 1. Mostrar Aprobados y Desaprobados \n 2. Mostrar Mejor y Peor Promedio \n 3.Salir"));
    }
    opcion = parseInt(prompt("¿Qué desea saber? \n 1. Mostrar Aprobados y Desaprobados \n 2. Mostrar Mejor y Peor Promedio \n 3.Salir"));
}
}

function mostrar_Aprobados(Curso)
{Curso.forEach(Alumno => {
    if(Alumno.aprobado){
        alert("Los alumnos aprobados son : " + Alumno.nombre + " " + Alumno.apellido + " con nota: " + Alumno.notaFinal)
    }
    else{
        alert("Los alumnos desaprobados son: "+ Alumno.nombre + " " + Alumno.apellido + " con nota: " + Alumno.notaFinal)}
    }
)};

function mostrar_Mejor_Promedio(Curso) {
    let mejorPromedio = -1;
    let mejorAlumno = null;
  
    Curso.forEach(alumno => {
      if (alumno.notaFinal > mejorPromedio) {
        mejorPromedio = alumno.notaFinal;
        mejorAlumno = alumno;
      }
    });
  
    if (mejorAlumno !== null) {
      alert("El alumno con el mejor promedio es: " + mejorAlumno.nombre + " " + mejorAlumno.apellido + " con nota: " + mejorAlumno.notaFinal);
    } else {
      alert("No hay alumnos en el curso.");
    }
  }


initProgram();





















