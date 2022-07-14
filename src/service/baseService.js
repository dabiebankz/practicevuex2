import axios from "axios";

export const appClient = axios.create({
    baseURL : "https://apis.ennovatingx.com/ennovatingx/demo_contact_app/api",
    headers:{
        Accept : "application/json",
        "Content-Type": "application/json",
    }
})

