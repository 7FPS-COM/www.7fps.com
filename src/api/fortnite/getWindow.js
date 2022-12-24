import api_urls from "../../constants/api_urls";
const { fortnite_api } = api_urls

const getWindow = ({eventWindowId}) => {
    if(eventWindowId === undefined) return false

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      credentials: 'include'
    };
    
    var promise = Promise.race([
      fetch(`${fortnite_api}/events/window?windowId=${eventWindowId}`, requestOptions)
        .then(response => response.text()),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 10000)
      )
    ]);

    return promise
}

export default getWindow