const fetch = require('node-fetch');
const wallets = require('./wallets');


async function fetchWallet() {

  for(const wallet of wallets) {
    await sleep(5000);
    let url = `https://backend-farm.plantvsundead.com/farms/other/${wallet}`;

    let options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg1NTU0OTE5NmNmNmM2YjE5MzllZmRlOGM2Y2M2ZWYzNDYzZjE5ZTAyIiwibG9naW5UaW1lIjoxNjI5NzcyMjE2NDQ3LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xNSAxNzo0Mjo1MSIsImlhdCI6MTYyOTc3MjIxNn0.fYF1MjoCK2cqt-cG6t-wCkmbQdkKpZjPCF6CdPf7Nkk'
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