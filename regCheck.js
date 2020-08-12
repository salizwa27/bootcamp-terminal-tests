module.exports = function isFromCapeTown(registrationNumbers){
  
  var isFromCapeTown = registrationNumbers.startsWith('CA');
  return isFromCapeTown;
};
