//Local Storage --> The code will fetch the value of
//the key from localStorage and return it
//as a JSON object.
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};