function onContentLoaded() {
  var accountSpan = document.getElementById("account");
  accountSpan.innerHTML =
    (typeof web3 === "undefined" ? "undefined" : web3.eth.accounts[0]);
}
document.addEventListener("DOMContentLoaded", onContentLoaded);

window.addEventListener('load', function() {
  console.log('Injecting')
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Now you can start your app & access web3 freely:
  onContentLoaded()

})
