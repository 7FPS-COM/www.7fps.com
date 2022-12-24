import getWindow from "../../../api/fortnite/getWindow";


const getWindowUtil = ({setWindowResponse, setWindowLoading, setIsServerConnectionError, eventWindowId}) => {
  if(eventWindowId === undefined) return
  setWindowLoading(true)
  setIsServerConnectionError(false)

  const eventWindowIdSave = eventWindowId
  const promise = getWindow({eventWindowId})
  promise.then(result => {
    try {
      result = JSON.parse(result)
      // API responses with an error
      // Error should be handled
      if(result.error !== undefined) return setIsServerConnectionError(true)
      if(result.result === false) return setIsServerConnectionError(true)

      if(eventWindowIdSave === eventWindowId) {
        setWindowResponse(result)
        setWindowLoading(false)
        setIsServerConnectionError(false)
      }
    } catch (error) {
      setIsServerConnectionError(true)
    }

    if(result === null) return
    if(result.result === false) setIsServerConnectionError(true)

  });
  promise.catch(error => {
    setIsServerConnectionError(true)
  });
};

export default getWindowUtil;