function getName(){
console.log('Tried getting name');
var result = web3.eth.call({
    to: "0x16d3C3BDF979E08c748C74b84bCc6A4a48d799D5"
},function(error, result){
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
