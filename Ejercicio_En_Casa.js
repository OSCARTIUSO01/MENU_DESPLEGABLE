var menu = "MENU\n";
menu+= "1. Helado\n";
menu+= "2. Hamburguesa\n";
menu+= "3. Perro_Caliente\n";
menu+= "4. Ensalada\n";
menu+= "5. Salir\n";
menu+= "Ingrese el número de tu pedido\n\n";


var cod=0;
    cod=parseInt(prompt(menu));
    console.log(cod)
    if (isNaN(cod)){
        document.write("Gracias por su visita: ")
    }
    else{switch(cod){
        case 1: document.write("1. Has seleccionado un Helado y tiene un valor de $ 15000")
        break;
        case 2: document.write("2. Has seleccionado una Hamburguesa y tiene un valor de $ 25000")
        break;
        case 3: document.write("3. Has seleccionado un Perro_Caliente y tiene un valor $ 20000")
        break;
        case 4: document.write("4. Has seleccionado una Ensalada y tiene un valor de $ 22000")
        break;
        default: document.write("el número seleccionado no está en el menú!");
    }
}

