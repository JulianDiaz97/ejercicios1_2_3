
document.getElementById("startBtn").addEventListener("click", start_programm);

function start_programm(){
    let nombre = prompt ('Introduzca su nombre')

    console.log(nombre)

    let pregunta1 = prompt(nombre + ', ¿Cuál es la capital de Italia?')

    console.log(pregunta1)

    if (pregunta1 == 'Roma'){
        let pregunta2 = prompt(nombre + ', ¿Cuál es la capital de España?')

        if (pregunta2 == 'Madrid') {
            let pregunta3 = prompt(nombre + ' , ¿Cuál es la capital de Portugal?')
            if (pregunta3 == 'Lisboa' ) {
                document.getElementById("correcto").innerHTML = 
                'Felicidades '  + nombre + ", Todas las respuestas son correctas ";
            }else{
                document.getElementById("resultado3").innerHTML = 
            nombre + ", Has fallafdo todas las preguntas";
            }
        }else{
            document.getElementById("resultado2").innerHTML = 
            nombre + ", vuelve a intentarlo la próxima vez";
        }


    }else{
        document.getElementById("resultado1").innerHTML = 
            nombre + ", tienes que estudiar más";
    }
}


