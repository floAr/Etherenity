function getName(){
console.log('Tried getting name');
    var ABI = [{"constant":false,"inputs":[{"name":"desiredUsername","type":"string"}],"name":"Register","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_useradress","type":"address"}],"name":"getUsername","outputs":[{"name":"username","type":"string"}],"payable":false,"type":"function"}];
    var contractAddress="0x16d3c3bdf979e08c748c74b84bcc6a4a48d799d5";
    var contract = web3.eth.contract(contractAddress, ABI);
contract.call().getUsername(function(error, result){
     if(!error)
         console.log(result)
     else
         console.error(error);
 });
}	

  function setName( )
      {
        gameInstance.sendMessage('UIController', 'SetName', 'floAr');
      }
