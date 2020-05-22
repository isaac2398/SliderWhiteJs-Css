var contenedorimg = document.getElementById('contenedorImg');
var izq = document.getElementById('izq');
var der = document.getElementById('der');
var indice =0;
var memoriaDeFotos = [
        'https://img-cdn.hipertextual.com/files/2020/04/hipertextual-puedes-descargar-impresionantes-fondos-pantalla-miui-12-2020767834.jpg?strip=all&lossy=1&quality=70&resize=960%2C640&ssl=1',
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg',
        'https://www.xtrafondos.com/descargar.php?id=4467&resolucion=5120x2880',
        'https://www.xtrafondos.com/wallpapers/liquido-de-color-abstracto-4718.jpg'];


contenedorimg.innerHTML= DataHtml(indice);
der.addEventListener("click",()=>adelante());
izq.addEventListener("click",()=>atras());

setInterval('adelante()',9000);

function adelante(){
    if (indice<3) {
        indice++;
        contenedorimg.innerHTML=DataHtml(indice,'fadeInRight');
    }else{
        indice=0;
        contenedorimg.innerHTML= DataHtml(indice,'fadeInRight');
    }
}
function atras(){
    if (indice>0) {
        indice--;
        contenedorimg.innerHTML= DataHtml(indice,'fadeInLeft');
    }else{
        indice=3;
        contenedorimg.innerHTML=DataHtml(indice,'fadeInLeft'); 
    }
}
function DataHtml(i,animacion){
    return '<img src="'+memoriaDeFotos[i]+'" class="img animated '+animacion+'" >'
}
