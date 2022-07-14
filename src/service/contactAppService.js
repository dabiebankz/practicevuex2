import {appClient} from "@/service/baseService";

export default  {
    register(payload){
        return appClient.post('/register', payload)
    },
    getUser(payload){
        return appClient.post('/get_user', payload)
    },
    addContact(payload){
        return appClient.post('/save_contact', payload)
    },
    getContact(payload){
        return appClient.post('/get_contact', payload)
    }
}