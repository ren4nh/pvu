const fetch = require('node-fetch');
const wallets = require('./wallets');


async function fetchWallet() {

  for(const wallet of wallets) {
    await sleep(5000);
    let url = `https://backend-farm.plantvsundead.com/farms/other/${wallet}`;

    let options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer '
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => checkData(json))
      .catch(err => console.error('error:' + err));
  }

}

function checkData(json) {
  console.log(json)
  if(json.status == 444) {
    console.log("Fora do horario")
    return
  }
  if(isEmpty(json.data)) {
    console.log("Sem dados")
    return
  }
}

async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}


function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}


fetchWallet();