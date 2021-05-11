async function getKorean(length) {
    let res = '';
    for (let i = 0; i < length; i++) {


        const promise = new Promise((resolve) => {
            setTimeout(() => {
                let date = Date.now().toString();
                date = +date.split('').splice(-5).join('')
                const chr = String.fromCharCode(date)
                resolve(chr)
            }, 50);

        });
        await promise.then((chr) => res += chr)
    }
    console.log(res);
}

getKorean(5)
module.exports.getKorean = getKorean
  