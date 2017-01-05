function goToOrder() {
   var param=$('input:radio[name ="optionsRadios"]:checked').val();
   window.location.href="https://order.sendyojee.com/?type="+param;
}