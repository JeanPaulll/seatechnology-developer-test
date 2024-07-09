import axios from "axios";

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 * Axios
 */
const apiUrl = process.env.REACT_APP_API;

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});