//Declaración de variables
var nombreUsuario = prompt("¿Cúal es tu nombre?");
var saldoCuenta = 30000;
var limiteExtraccion = 20000;
var codigoSeguridad = "1234";



//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
};


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limiteExtraccion = TomarMonto("Por favor Ingrese su nuevo limite de extraccion");
    if (!limiteExtraccion) {
        alert("EL valor ingresado no es valido");
    } else {
        actualizarLimiteEnPantalla(limiteExtraccion);
        alert("Su nuevo limite de extracción es: " + limiteExtraccion);
    }
}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var extraccion = TomarMonto("Ingrese el monto que desea extraer");
    if (!extraccion) {
    }
    if (extraccion > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extraccón!!");
        return false;
    }
    if (extraccion > saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero!!");
        return false;
    }
    if (extraccion % 100 == 0) {
        restarDinero(extraccion);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert("Usted acaba de extraer: " + extraccion + "\nSu saldo anterior era: " + saldoAnterior + "\nSu saldo actual es: " + saldoCuenta);
    } else {
        alert("Solo puedes extraer billetes de $100!!");
    }
}

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var monto = TomarMonto("Ingrese el monto que desea depositar");
    if (!monto) {
        alert("El monto que ingreso es incorrecto!");
        return;
    }
    sumarDeposito(monto);
    actualizarSaldoEnPantalla(saldoCuenta);
    alert("Usted deposita: " + monto + "\nSu saldo anterior era: " + saldoAnterior + "\nSu saldo actual es: " + saldoCuenta);

}

function procesarPagodeServicio(serv, monto) {
    var saldoAnterior = saldoCuenta;
    if (saldoCuenta > monto) {
        restarDinero(monto);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert("Usted pago el servicio de: " + serv + "\nImporte descontado: " + monto + "\nSu saldo anterior era: " + saldoAnterior + "\nSu saldo actual es: " + saldoCuenta);
    } else {
        alert("Usted no tiene saldo!!");
    }
}

function pagarServicio() {
    agua = 350;
    telefono = 425;
    luz = 210;
    internet = 570;
    stringNum = prompt("Ingrese el número que corresponda con el servicio que queres pagar \n 1- Agua\n 2- Luz\n 3-Internet\n 4- Telefono");
    servicio = parseInt(stringNum);
    switch (servicio) {
        case 1:
            procesarPagodeServicio("Agua", agua);
            break;
        case 2:
            procesarPagodeServicio("Telefono", telefono);
            break;
        case 3:
            procesarPagodeServicio("Luz", luz);
            break;
        case 4:
            procesarPagodeServicio("Internet", internet);
            break;
        default:
            alert("Servicio invalido!!");
    }

}

function transferirDinero() {
    var CuentaAmiga1 = 1234567;
    var CuentaAmiga2 = 7654321;
    var stringDinero = prompt("Ingrese el monto que  desea transferir");
    var transferir = parseInt(stringDinero);
    if (transferir > saldoCuenta) {
        alert("No tienes esa cantidad de dinero para transferir");
        return false;
    }
    if (transferir <= 0) {
        alert("Monto incorrecto");
        return false;
    }
    if (transferir < saldoCuenta) {
        stringCuenta = prompt("Ingrese la cuenta a la que desea transferir");
        cbu = parseInt(stringCuenta);
    }
    if (CuentaAmiga1 === cbu || CuentaAmiga2 === cbu) {
        restarDinero(transferir);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert("Se ha transferido: " + transferir + "\nCuenta destino: " + cbu);
    } else {
        alert("Solo se puede transferir dinero a una cuenta amiga!!");
    }
}

function iniciarSesion() {
    var clave = prompt("Por favor ingrese su clave");
    if (clave !== codigoSeguridad) {
        saldoCuenta = 0;
        actualizarSaldoEnPantalla(saldoCuenta);
        alert("Código incorrecto. Tú dinero ha sido retenido por medidas de seguridad!!");
    } else {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
    }
}

function sumarDeposito(deposito) {
    saldoCuenta += deposito;
}

function restarDinero(extraccion) {
    saldoCuenta -= extraccion;
}

function TomarMonto(mensaje) {
    var stringMonto = prompt(mensaje);
    var monto = parseInt(stringMonto);
    //Hacer el prompt del mensaje y tomar un numero
    //convertir en numero
    //si no un numero devolver false
    //si no es multiplo de 100 devolver false
    //si es menor que 0 devolver false
    //si es numero, es mayor a cero y es multiplo de 100 se ejecuta
    if (Number.isNaN(monto)) {
        return;
    }
    if (monto % 100 !== 0) {
        return;
    }
    if (monto < 0) {
        return;
    } else {
        return monto;
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}