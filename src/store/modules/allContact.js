import allRequest from "@/model/request/allRequest";
import allResponse from "@/model/response/allResponse";
import contactAppService from "@/service/contactAppService";
import swal from "sweetalert";

const state = {
    contact:allResponse.addContact,
    register:allResponse.register
}

const mutation = {
    updateContact:(state, payload) => {
        state.contact = payload
    }
}

const getters = {}

const actions = {
    updateContact:({commit},payload=allRequest.allRequest)=>{
        return contactAppService.register(payload).then(response => {
            let responseData = response.data.data
            if (responseData.code == '00') {
                commit("updateContact", responseData)
                swal({
                    title: "Good Job!",
                    text: responseData.message,
                    icon: "success",
                    button: "Alright"
                });
            }else {
                swal({
                    text: responseData.message,
                    icon: "error",
                    button: "oops!",
                    }
                )
            }
        });
    },

    register:({commit},payload=allRequest.register) => {
        return contactAppService.register(payload).then(response => {
            let responseData = response.data
            if(responseData.code == "00"){
                swal({text:responseData.message, icon:"success"}).then(() => {
                    commit()
                })
            }else{
                swal({text:responseData.message, icon:"error"})
                console.log(responseData.message)
            }
        })
    }
}

export default {
    state,
    mutation,
    getters,
    actions
}