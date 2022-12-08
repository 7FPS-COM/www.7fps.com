import getEvents from "../../../api/fortnite/getEvents";

const getEventsUtil = ({setEventsResponse, setIsLoading, setIsServerConnectionError, region}) => {
  if(region === null) return
  setIsLoading(true)

  const promise = getEvents({region})
  promise.then(result => {
    try {
      result = JSON.parse(result)
      if(result.result === false) setIsServerConnectionError(true)
      if(result.events === undefined) setIsServerConnectionError(true)

      setEventsResponse(result)
      setIsLoading(false)
    } catch (error) {
      setIsServerConnectionError(true)
    }

    if(result === null) return
    if(result.result === false) setIsServerConnectionError(true)
    if(result.events === undefined) return

  });
  promise.catch(error => {
    setIsServerConnectionError(true)
  });
};

export default getEventsUtil;