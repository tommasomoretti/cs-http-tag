function sendData(full_endpoint, method, data) {
  var xhr = new XMLHttpRequest();
  if (method === 'POST') {
    xhr.open('POST', full_endpoint);
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));
  } else if (method === 'GET') {
    var str = '?'
    Object.keys(data).forEach((key, index) => {
      str = str + key + '=' + '&'
      // str = str + key + '=' + JSON.stringify(data[key])  + '&'
    });
    xhr.open('GET', full_endpoint + str.slice(0, -1));
    xhr.withCredentials = true;
    xhr.send();
  }
}
