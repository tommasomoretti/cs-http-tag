function sendData(full_endpoint, method, data) {
  var xhr = new XMLHttpRequest();
  if (method === 'POST') {
    xhr.open('POST', full_endpoint);
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));
  } else if (method === 'GET') {
    xhr.open('GET', full_endpoint + JSON.stringify(data));
    xhr.withCredentials = true;
    xhr.send();
  }
}
