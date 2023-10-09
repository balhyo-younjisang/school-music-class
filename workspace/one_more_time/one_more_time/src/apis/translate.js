import axios from "axios";
axios.defaults.withCredentials = true;
export const translate = async (src, target, text) => {
    const apiUrl = "/v1/papago/n2mt";
    const data = {
        "source": "ko",
        "target": "en",
        "text": text
    }

    // console.log(import.meta);

    await axios.post(apiUrl, data, {
        headers: {
            'Content-Type': 'text/json',
            'X-Naver-Client-Id': "IJMmY1Kpqy2ocjk2AcLW",
            'X-Naver-Client-Secret': "HWfXpdS31L",
        }
    }).then((data) => console.log(data));
}