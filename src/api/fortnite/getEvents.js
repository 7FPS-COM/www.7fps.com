import api_urls from "../../constants/api_urls";
const { fortnite_api } = api_urls

const getEvents = (region = 'EU', lang = 'en', upcomingEvents = true) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      credentials: 'include'
    };

    upcomingEvents = upcomingEvents ? 'true' : 'false'
    
    var promise = Promise.race([
      fetch(`${fortnite_api}/events/list?region=${region}&lang=${lang}&upcomingEvents=${upcomingEvents}`, requestOptions)
        .then(response => response.text()),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 10000)
      )
    ]);

    return promise
}

export default getEvents