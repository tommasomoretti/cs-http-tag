function sendData(full_endpoint, method, data) {
  var xhr = new XMLHttpRequest();
  if (method === 'POST') {
    xhr.open('POST', full_endpoint);
    xhr.withCredentials = true;
    console.log(data);
    xhr.send(JSON.stringify(data));
  } else if (method === 'GET') {
    var str = '?'
    Object.keys(data).forEach((key, index) => {
      str = str + key + '=' + stringifyKey(data[key])  + '&'
    });
    str = str.slice(0, -1);
    console.log(str);
    xhr.open('GET', full_endpoint + str);
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));
  }
}

function stringifyKey(obj){
  if (typeof obj === 'object' && obj !== null) {
    return JSON.stringify(obj)
  } else {
    return obj
  }
}
