import api_urls from "../../../constants/api_urls";
const { client_api } = api_urls

const saveNote = (noteId, {title, content}) => {
    const details = {
        title,
        content
    }

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
      credentials: 'include',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    };
    
    var promise = Promise.race([
      fetch(`${client_api}/notes/${noteId}`, requestOptions)
        .then(response => response.text()),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 10000)
      )
    ]);

    return promise
}

export default saveNote