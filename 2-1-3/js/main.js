function average (){
    var sumArg = 0;
    var sumI = 0;
    for (i=0; i<arguments.length; i++){
        sumArg += arguments[i];
        sumI+=1;
    }
    console.log (sumArg / sumI);
}
average (1,2,3, 4, 7, 100);