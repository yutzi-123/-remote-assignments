

function delayedResult(n1, n2, delayTime, callback) {
  let result = n1 + n2
  window.setTimeout(function () { callback(result) }, delayTime);
}
/*setTimeOut的function可以單獨帶入callback，但如果是callback需要參數的狀況，就需要用一個大的functino來包住他？*/ 


delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds 


delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds  




