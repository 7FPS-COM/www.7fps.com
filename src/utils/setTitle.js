import website_name from "../constants/website_name";

const setTitle = (title = null) => {
    if(title === null) document.title = `${website_name}`
    if(title !== null) document.title = `${website_name} - ${title}`
};

export default setTitle;