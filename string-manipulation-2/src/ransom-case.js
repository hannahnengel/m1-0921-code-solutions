/* exported ransomCase */
function ransomCase(string) {
  var ransomCased = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomCased += string.charAt(i).toLowerCase();
    } else ransomCased += string.charAt(i).toUpperCase();
  }
  return ransomCased;
}
