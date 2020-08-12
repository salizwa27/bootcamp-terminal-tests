module.exports = function isFromGauteng (registrationNumber){
  
  var isFromGauteng = registrationNumber.endsWith('GP');
  return isFromGauteng;
};
