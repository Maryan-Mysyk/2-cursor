var bilsheMenshe = function(){
var bilshe = arguments[0];
var menshe = arguments[0];
for (var i = 0; i < arguments.length; i++){
    if ((bilshe - arguments[i + 1]) < 0){
        bilshe = arguments[i + 1];
    }
    else if ((menshe - arguments[i+1]) > 0){
        menshe = arguments[i+1];
    }
}
console.log ('max: ' + bilshe, ', min: ' + menshe);
}
bilsheMenshe (4, 6, 77, 34, 6543, -43, -3);