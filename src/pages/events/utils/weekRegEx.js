// S23_DivisionalCups_Elite_Finals_EU_Week2
function weekRegEx(string) {
    
    const weekRegEx = /Week([0-9]*)/;
    const match = string.match(weekRegEx);

    if(match !== null) {
        return match[1];
    } else {
        return null;
    }

}

export default weekRegEx;