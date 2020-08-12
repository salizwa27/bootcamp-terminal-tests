function countAllFromTown (regNumber, location){
  
    var fromStellies = regNumber.split(',')
    var howMany = 0
    for (var i = 0; i < fromStellies.length;i++){
      var anyTown = fromStellies[i].trim();
      
       if(anyTown.startsWith(location)){
        howMany++;
       }
     }
      return howMany;
    };