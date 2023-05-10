//FUNCION QUE CALCULA LA DISTANCIA DE UN MOVIMIENTO CONSTANTE
const calcDistance = () => {
    const speed = parseInt(document.getElementById("speed").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const time = parseInt(document.getElementById("time2").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const distanceResult = document.getElementById("distanceResult");
        //Declaro y uno mediante el metodo getElementById el resultado
    const distancia = speed * time;
   distanceResult.innerHTML = `La distancia es: ${distancia} metros `
   //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA EL TIEMPO DE UN AUTO EN MOVIMIENTO CONSTANTE
const calcTime = () => {
    const speed = parseInt(document.getElementById("speedt").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const distance = parseInt(document.getElementById("distance2").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const timeResult = document.getElementById("timeResult");
    console.log(speed, distance)
    const time = distance / speed;
   timeResult.innerHTML = `El tiempo es: ${time} segundos `
   //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
   //console.log((distance, speed), (speed));
}
//FUNCION QUE CALCULA LA VELOCIDAD DE UN AUTOMOVIL EN MOVIMIENTO CONSTANTE
const calcSpeed = () => {
    const distance = parseInt(document.getElementById("distance").value);
       //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const time = parseInt(document.getElementById("time").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const speedResult = document.getElementById("speedResult");
        //Declaro y uno mediante el metodo getElementById el resultado
    const velocidad = distance / time;
   speedResult.innerHTML = `La vlocidad es: ${velocidad} m/s `
   //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA LAS TABLAS DE MULTIP0LICAR DEL NUMERO INTRODUCIDO
const calcTableM = () =>{
    const number = document.getElementById("table").value;
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    let result;
    if(!isNaN(number)){//EVALUA QUE LA VARIABLE SEA UN NUMERO
        for(let i=0; i<=12; i++){
           tableResult.innerHTML = tableResult.innerHTML + `${number} x ${i} = ${number*i} </br>`

        }
    }else alert("SOLO SE PERMITE NUMEROS");

}
//FUNCION QUE CALCULA CODIFICA LENGUAJE MORSE
function calcCodeMorse () {
    const morse = document.getElementById("lenguajemorse").value.toLowerCase();
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const morseResult = document.getElementById("morseResult");
        //Declaro y uno mediante el metodo getElementById el resultado
    console.log(morse);
    //INTEGRACION DEL LENGUAJE  EN UN ARRAY
       const lenguajeMorse={
         "a": ".-","b":"-...","c":"-.-.","d":"-..","e":".","f":"..-.","g":"--.","h":"....","i":"..",
         "j":".---","k":"-.-","l":".-..","m":"--",
            "n":"-.","o":"---","p":".--.","q":"--.-","r":".-.","s":"...","t":"-","u":"..-","v":"...-",
            "w":".--","x":"-..-","y":"-.--","z":"--..",".":".-.-.-",",":"--..--","?":"..--..","!":"..--.",
            ":":"---...","=":"-...-",
             "0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....",
             "7":"--...","8":"---..","9":"----."

         };
            
         let letter1 = morse.split("");//SE DIVIDEN LOS CARACTERES 
         let letter2 = letter1.map(x=>{//CREA UN NUEVO ARREGLO SIN CAMBIAR EL ORIGINAL
             if (lenguajeMorse[x]){
                 return lenguajeMorse[x];
            }else{
                 return x;
             }
        });
        
    let code = letter2.join(" ");//UNE LOS ELEMENTOS EN UNO SOLO, ESPECIFICANDO EL SEPARADOR
    document.getElementById("morseResult").value=code;//SE LE DA EL VALOR DE CODE AL ID CORRESPONDIENTE
    console.log(code);
    morseResult.innerHTML=document.getElementById("morseResult").value;
//IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE

}          
//FUNCION QUE CALCULA DESCODIFICAR LENGUAJE MORSE
function calcDescoMorse () {
        const texto = document.getElementById("mens2").value;
            //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
        const textoMorseResult = document.getElementById("textoMorseResult");
            //Declaro y uno mediante el metodo getElementById el resultado
        console.log(texto.split(" "));
            //INTEGRACION DEL LENGUAJE  EN UN ARRAY
           const morseTexto={
              ".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",
            ".---": "j","-.-":"k",".-..":"l","--":"m",
                "-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t","..-":"u","...-":"v",
               ".--":"w","-..-":"x","-.--":"y","--..":"z", ".":".-.-.-",",":"--..--","?":"..--..","!":"..--.",
               ":":"---...","=":"-...-",
                "-----": "0",".----":"1","..---":"2","...--":"3","....-":"4",".....":"5","-....":"6",
                 "--...":"7","---..":"8","----.":"9"
    
                
             };
                
             let letter1 = texto.split(" "); //SE DIVIDEN LOS CARACTERES 
             let letter2 = letter1.map(x=>{//CREA UN NUEVO ARREGLO SIN CAMBIAR EL ORIGINAL
                 if (morseTexto[x]){
                     return morseTexto[x];
                }else{
                     return x;
                 }
            });
            
        let code = letter2.join(" ");//UNE LOS ELEMENTOS EN UNO SOLO, ESPECIFICANDO EL SEPARADOR
        document.getElementById("textoMorseResult").value=code;//SE LE DA EL VALOR DE CODE AL ID CORRESPONDIENTE
        console.log(code)
        textoMorseResult.innerHTML=document.getElementById("textoMorseResult").value;
    //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA CODIFICA LENGUAJE CESAR POR 11 ESPACIOS       
function calcCodiCesar(){
            const cesar = document.getElementById("mens3").value.toLowerCase();
                //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
            const cesarResult = document.getElementById("cesarResult");
                //Declaro y uno mediante el metodo getElementById el resultado
            console.log(cesar);
                //INTEGRACION DEL LENGUAJE  EN UN ARRAY
               const lenguajeCesar={
                //las letras tendran un salto de 11 letras
                 "a": "l","b":"m","c":"n","d":"o","e":"p","f":"q","g":"r","h":"s","i":"t",
                 "j":"u","k":"v","l":"w","m":"x",
                    "n":"y","o":"z","p":"a","q":"b","r":"c","s":"d","t":"e","u":"f","v":"g",
                    "w":"h","x":"i","y":"j","z":"k",
                     "0":"4","1":"5","2":"6","3":"7","4":"8","5":"9","6":"0",
                     "7":"1","8":"2","9":"3"
        
                 };
                    
                 let letter1 = cesar.split("");//SE DIVIDEN LOS CARACTERES 
                 let letter2 = letter1.map(x=>{//CREA UN NUEVO ARREGLO SIN CAMBIAR EL ORIGINAL
                     if (lenguajeCesar[x]){
                         return lenguajeCesar[x];
                    }else{
                         return x;
                     }
                });
                
            let code = letter2.join(" ");//UNE LOS ELEMENTOS EN UNO SOLO, ESPECIFICANDO EL SEPARADOR
            document.getElementById("cesarResult").value=code;//SE LE DA EL VALOR DE CODE AL ID CORRESPONDIENTE
            console.log(code)
            cesarResult.innerHTML=document.getElementById("cesarResult").value;
            //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA DESCODIFICAR LENGUAJE CESAR POR 11 ESPACIOS
function calcDescoCesar() {
            const descesar = document.getElementById("mens4").value.toLowerCase();
                //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
            const desciCesarResult = document.getElementById("desciCesarResult");
                //Declaro y uno mediante el metodo getElementById el resultado
            console.log(descesar);
                //INTEGRACION DEL LENGUAJE  EN UN ARRAY
               const lenguajeDescoCesar={
                //las letras tendran un salto de 11 letras
                 "l": "a","m":"b","n":"c","o":"d","p":"e","q":"f","r":"g","s":"h","t":"i",
                 "u":"j","v":"k","w":"l","x":"m",
                    "y":"n","z":"o","a":"p","b":"q","c":"r","d":"s","e":"t","f":"u","g":"v",
                    "h":"w","i":"x","j":"y","k":"z",
                     "4":"0","5":"1","6":"2","7":"3","8":"4","9":"5","0":"6",
                     "1":"7","2":"8","3":"9"
                
                 };
                    
                 let letter1 = descesar.split("");//SE DIVIDEN LOS CARACTERES 
                 let letter2 = letter1.map(x=>{//CREA UN NUEVO ARREGLO SIN CAMBIAR EL ORIGINAL
                     if (lenguajeDescoCesar[x]){
                         return lenguajeDescoCesar[x];
                    }else{
                         return x;
                     }
                });
                
            let code = letter2.join(" ");//UNE LOS ELEMENTOS EN UNO SOLO, ESPECIFICANDO EL SEPARADOR
            document.getElementById("desciCesarResult").value=code;//SE LE DA EL VALOR DE CODE AL ID CORRESPONDIENTE
            console.log(code)
            desciCesarResult.innerHTML=document.getElementById("desciCesarResult").value;
            //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA NUMEROS PRIMOS
const calcnumberCousin = ()=>{
    const num = parseInt(document.getElementById("num").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    let result=[];//GUARDAA EL RESULTADO
    if(!isNaN (num)){//EVALUA SI ES UN NUMERO
    for(let i=1; i<=num; i++){
        if(i%2 == 1){//EVALUA QUE EL PORCIENTO DE NUMEROS PRIMOS
           result.push(i);//AGREGA TODOS LOS NUMEROS
       }
       
    }
    console.log(result );
} else {
    alert("Solo se permiten numeros")
}
cousinResult.innerHTML=`Los numeros primos son ${result}`
//IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA LA INTRODUCCION DE NUMEROS DECIMALES A BINARIOS
function calcNumberToBinari(){
    let number = parseInt(document.getElementById("number").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const binarioResult = document.getElementById("binarioResult");
        //Declaro y uno mediante el metodo getElementById el resultado
    let result= [];//ARRAY DE LAS DIVISIONES
    let result2=[];//ARRAY DE LOS RESIDUOS
    let division, residuo;
    console.log(number);
    while (number > 0){//EVALUA QUE LA DIVISION LLEGUE HASTA 0
    
        result.push(number);//SE AGREGA CADA RESULTADO DE LA DIVISION
        division = Math.trunc(number / 2);
        residuo =  number % 2;// AGREGA AL ARRAY TODOS LOS RESULTADOS
        result2.push(residuo);
        residuo = residuo;
        number = division;
     }
    const  generalResiduo = result2.reverse();//PARA CAMBIAR EL RESULTADO "VIRARLO DESDE EL ULTIMO 
    //AL PRIMERO EJEMPLO UN RESULTADO ES 10110010, EL REVERSE LO DEBE CAMBIAR A 01001101"
    console.log(generalResiduo);
    console.log(result)
    console.log(result2)
    for(let i=0;i<result2.length;i++){
        const general = result2[i] + "  ";
        console.log(general)

    }
    //binarioResult = result2;
    binarioResult.innerHTML = `EL CODIGO BINARIO ES: <br>${result2}`;
         //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA 
function calcAscendent(){
    var first = parseInt(document.getElementById("num1").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    let result=[];
    if(!isNaN (first)){
        for(let i=1; i <= first ; i++){
            result.push(i);
           }
    } else {
        alert("Solo se permiten numeros")
    }
    ascendentResult.innerHTML=`Los numeros son ${result}`
    //IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}

/*CREAR UNA FUNCION QUE SOLITE UN NUMERO Y COMO 
RESULTADO ME DE TODOS LOS NUMEROS, DE FORMA DECRECIENTE
*/
//FUNCION QUE CALCULA 
function calcdescendente(){
    var second = parseInt(document.getElementById("num2").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    let result=[];
    if(!isNaN (second)){
    for(let i=second; i<=second; i--){
            if(i==0)break;
            result.push(i);
    }

} else {
    alert("Solo se permiten numeros")
}
descendentResult.innerHTML=`Los numeros son ${result}`
//IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
/*CREAR UNA FUNCION QUE SOLICITE UN N UMERO Y LOS SEPARE ENTRE PARES E IMPARES*/
//FUNCION QUE CALCULA 
function calcPair(){
    var third = parseInt(document.getElementById("num3").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    let result=[];
    let result2=[];
    if(!isNaN (third)){
    for(let i=1; i<=third; i++){
        if(i%2 == 0){
            result.push(i);
       }
        else {
            result2.push(i);
    }  
    }
} else {
    alert("Solo se permiten numeros")
}
parImparResult.innerHTML=`Los numeros pares son: ${result} </br> Los numeros impares son: ${result2}`
//IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE SOLICITE UN NUMERO Y LOS SEPARE ENTRE PARES E IMPARES Y LOS IMPRIMA EN ORDEN DESCENDENTE
function calcInverso(){
    var fourth = parseInt(document.getElementById("num4").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input

    let result=[];
    let result2=[];
    if(!isNaN (fourth)){
    for(let i=fourth; i<=fourth; i--){
    if(i==0)break;
    if(i%2 == 0){
        result.push(i);
   }
    else {
        result2.push(i);
}  
}
} else {
    alert("Solo se permiten numeros")
}
inversoResult.innerHTML=`Los numeros pares son: ${result} </br> Los numeros impares son: ${result2}`
//IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
//FUNCION QUE CALCULA LA SERIE FIBONACCI
function calcFibonacci(){
    var firth = parseInt(document.getElementById("fibo").value);
        //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    let result ="";//VARIABLE UE GUARDARA EL RESULTADO
    var aux=0;//PARA LA ITERACION DE LOS NUMEROS
    var fib1=1;//PARA LA ITERACION DE LOS NUMEROS
    var fib2=0;//PARA LA ITERACION DE LOS NUMEROS
    if(!isNaN (firth)){//EVALUA QUE SEA SOLO NUMERO
        for (let i=0; i<firth;i++){
            aux = fib1 + fib2;//AUX TOMARA EL VALOR QUE CORRESPONDA
            fib1 = fib2;//SE IGUALARA A FIB1 A FIB2
            fib2 = aux; // FIB2 SERA IGUAL A AUX
            result=result + " "+aux; // EL VALOR SE GUARDARA AQUI Y EL CICLO VUELVE A REPETIRSE HASTA TERMINAR
        }
        
} else {
    alert("Solo se permiten numeros")
}
fibonacciResult.innerHTML=`Los numeros de la sserie fibonacci son:</br> ${result}`
//IMPRIME EL RESULTADO EN LA ETIQUETA P CORRESPONDIENTE
}
