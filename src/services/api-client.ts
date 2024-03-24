import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "370a5021b20f4923b93947d07e964af2"
    }
})