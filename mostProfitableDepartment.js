module.exports = function mostProfitableDepartment(department1){
    var map = {};
    var depName = '';
     for (var i = 0; i < department1.length; i++){
       var myDepartment = department1[i].department
        if(map[myDepartment] === undefined){
           map[myDepartment] = 0;
        }
            map[myDepartment] += department1[i].sales
     }
    
    
      var greaterDep = "";
      var greaterSales = 0;
    
      for( i in map){
         if(map[i] > greaterSales){
           greaterDep = i
           greaterSales = map[i]
    
         }
    
      }return greaterDep
    }