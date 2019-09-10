var sommesPositif=0;
var sommesNegatif=0;
var chiffreusager=Number(prompt("entrez votre chiffre"));

         while(chiffreusager != 0){

     if(chiffreusager > 0){
        sommesPositif += chiffreusager
    }
    else{
       sommesNegatif += chiffreusager
    }
        chiffreusager = Number(prompt("entrez votre chiffre"));


    }
    alert("Sommes des positif="+sommesPositif);
    alert("Sommes des negatif="+sommesNegatif);