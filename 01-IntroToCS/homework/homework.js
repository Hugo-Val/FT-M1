'use strict';

function BinarioADecimal(num) {
   var pow=0;
   var sum=0;
   for (let index = num.length-1; index >= 0; index--) {
      sum += 2**pow*num[index];
      pow++;
   }
   return sum;
}

function DecimalABinario(num) {
   var bin=[];
   var str='';
   var div=num;
   while (div/2!==0) {
      bin.push(div%2);
      div=Math.floor(div/2);
      
      
   }
   bin.reverse(bin);
   
   for (let index = 0; index < bin.length; index++) {
      str+=bin[index];
      
   }

   return str;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
