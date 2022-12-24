function roundRegEx(string) {

    const roundRegEx = /Round([0-9]*)/;
    const match = string.match(roundRegEx);

    if(match !== null) {
        return match[1];
    } else {
        return null;
    }

}

export default roundRegEx;