function goToOrder() {
   var param=$('input:radio[name ="optionsRadios"]:checked').val();
   var order="https://order.sendyojee.com/?type="+param;
   window.open(order);
}
