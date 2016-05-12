String.prototype.myRevertFunction = function () {
  console.log('this is reverted '+ this.split('').reverse().join('') +' string');
};

'abc test tekst'.myRevertFunction();