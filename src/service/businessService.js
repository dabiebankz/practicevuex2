import {appClient} from "@/service/baseService";
export default  {
    businessRegisterApi(payload){
        return appClient.post('register/', payload)
    }
}