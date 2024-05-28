import global from '/src/main'

export default () => new Promise((res, rej) => {
    global.$http.get('/quotes')
        .then((response) => {
            res(response);
            console.log(response);
        })
        .catch((err) => {
            rej(err);
            console.log(err);
        })
})
