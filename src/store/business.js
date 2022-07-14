import businessRequest from "@/model/request/businessRequest";
import businessResponse from "@/model/response/businessResponse";
import businessService from "@/service/businessService";
import swal from "sweetalert";


const state = {
    business:businessResponse.businessResponse,
}

const mutations = {
    UpdateBusiness:(state, payload) => {
        state.businsess = payload
    }
}
const getters = {}

const actions = {
    UpdateBusiness:({commit},payload=businessRequest.businessRequest)=>{
        return businessService.businessRegisterApi(payload).then(response => {
            let responseData = response.data
            if (responseData.code == "00") {
                commit("UpdateBusiness", responseData)
                swal({
                    title: "Good job!",
                    text: responseData.message,
                    icon: "success",
                    button: "Alright!",
                });
            }else{
                swal({
                    text: responseData.message,
                    icon: "error",
                    button: "oops!",
                });
            }
        })
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}