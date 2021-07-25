
const lang = 'tr-TR,tr'

const request = {
    method: "POST",
    headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": `${lang};q=0.9,en-US;q=0.8,en;q=0.7`,
        "cache-control": "max-age=0",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    }
}

module.exports = function get(url, params) {
    var data = ''
    if (params && typeof params === 'object') {
        for (const [key, value] of Object.entries(params)) {
            data += `${key}=${value}&`
        }
        request.data = data.slice(0, -1)
    }
    request.url = url
    return request
}