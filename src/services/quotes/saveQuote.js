import Global from '/src/main';

export default (params) => new Promise((res, rej) => {
    const data = {
        author: params.author,
        content: params.content,
    };
    Global.$http.post('/quotes', data)
        .then((response) => {
            res(response);
        })
        .catch((err) => {
            rej(err);
            console.log(err);
        })
})
