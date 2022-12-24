function eventRegEx(string) {
    
    const eventRegEx = /Event([0-9]*)/;
    const match = string.match(eventRegEx);

    if(match !== null) {
        return match[1];
    } else {
        return null;
    }

}

export default eventRegEx;