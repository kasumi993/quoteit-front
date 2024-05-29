import Global from '/src/main';

export default (id) => new Promise((res, rej) => {
    Global.$http.patch(`/quotes/${id}/unlike`)
        .then((response) => {
            res(response.data);
        })
        .catch((err) => {
            rej(err);
            console.log(err);
        })
})
