import { api } from "./config";
import Axios from "axios";

export const callAPI = (uri, method = "GET") => {
    return Axios({
        method: method,
        url: api + "/" + uri,
    });
};