module.exports = function countAllPaarl (regNumber){
  
    var registrationNumber = regNumber.split(', ')
    var howMany = 0
    for (var i = 0; i < registrationNumber.length;i++){
      var paarl = registrationNumber[i].trim()
      
       if(paarl.startsWith('CJ')){
        howMany++
       }
     }
      return howMany
    };