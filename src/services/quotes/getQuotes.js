import global from '/src/main'

export default (searchText) => new Promise((res, rej) => {
    global.$http.get(`/quotes?search=${searchText}`)
        .then((response) => {
            res(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            rej(err);
            console.log(err);
        })
})
