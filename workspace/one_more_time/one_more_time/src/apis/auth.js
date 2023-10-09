import axios from "axios";
const authApi = 'http://127.0.0.1:8080/auth';

export const Login = async (email, password) => {
    const loginApi = `${authApi}/login`;

    const res = await axios({
        method: "POST",
        url: loginApi,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
        },
        data: {
            email,
            password,
        }
    }).catch((e) => {
        console.log(`[LOGIN API ERROR] ${e}`);
    });

    return res;
}