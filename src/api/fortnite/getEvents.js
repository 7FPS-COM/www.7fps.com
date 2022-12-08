import api_urls from "../../constants/api_urls";
const { fortnite_api } = api_urls

const getEvents = ({region, lang, last, upcomingEvents}) => {
    region = region === undefined ? "EU" : region
    lang = lang === undefined ? "en" : lang
    last = last === undefined ? 21 : last
    upcomingEvents = upcomingEvents === undefined ? false : upcomingEvents

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      credentials: 'include'
    };
    
    var promise = Promise.race([
      fetch(`${fortnite_api}/events/list?region=${region}&lang=${lang}&last=${last}`, requestOptions)
        .then(response => response.text()),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 10000)
      )
    ]);

    return promise
}

export default getEvents