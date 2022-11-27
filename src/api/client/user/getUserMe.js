import api_urls from "../../../constants/api_urls";
const { client_api } = api_urls

const getUserMe = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      credentials: 'include'
    };
    
    var promise = Promise.race([
      fetch(`${client_api}/user/@me`, requestOptions)
        .then(response => response.text()),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 10000)
      )
    ]);

    return promise
}

export default getUserMe