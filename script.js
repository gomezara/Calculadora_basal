const CALCULAR= document.getElementById ('calcular');
const ERROR= document.getElementById('error');
const FLU= document.getElementById('flu');
const MAN= document.getElementById('man');

CALCULAR.addEventListener('dblclick', () => {
const DATO = document.getElementById('peso').valeAsNumber;
if (DATO > 0){
    ERROR.style.display = 'none'
    let flujo = calcFlujo(DATO);
    let mantenimiento = flujo*1.5;
    FLU.innerHTML = flujo + ' cc/hr';
    MAN.innerHTML = 'm+m/2' + mantenimiento + 'cc/hr';
    FLU.style.display = 'block';
    MAN.style.display = 'block';
}else{
    ERROR.style.display ='block';
    FLU.style.display ='none';
    MAN.style.display = 'none';

}
})
function calcFlujo(peso){
    let resultado =0;
    if(peso<=30){
        if(peso<=10){
            resultado = peso*100;
        }
        if (peso>10 && peso<=20){
            resultado=resultado + 500;
        }
        if (peso>20 && peso<=30){
            resultado= 1500+(resultado+((peso-20)*20));
        }
    }else{
        let corporal =((peso*4)+7)/(peso+90);
        let sup1= corporal * 1500;
        let sup2= corporal*2000;
    }
    return resultado;
}