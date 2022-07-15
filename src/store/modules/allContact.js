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
    },
    getUser: ({commit}, payload=allRequest.getUser) => {
        return contactAppService.getUser(payload).then(response => {
            let dataResponse = response.data
            if (dataResponse.code == "00"){
                swal({text:dataResponse.message, icon: "success"}).then(() => {
                    commit()
                })
            }else{
                swal({text:dataResponse.message, icon: "error"})
            }
        })
    },
    addContact: ({commit}, payload=allRequest.addContact) => {
        return contactAppService.addContact(payload).then(response => {
            let responseContact = response.data
            if (responseContact.code == '00'){
                swal({text:responseContact.message, icon: "success"}).then(()=>{
                    commit()
                })
            }else {
                swal({text:responseContact.message, icon:"error"})
                console.log(responseContact.message)
            }

        })
    },
    getContact: ({commit}, payload = allRequest.getContact) => {
        return contactAppService.getContact(payload).then(response =>{
            let responseGet = response.data
            if (responseGet.code == "00"){
                swal({text:responseGet.message, icon:"success"}).then(() =>{
                    commit()
                })
            }else {
                swal({text:responseGet.message, icon:"error"})
                console.log(responseGet.message)
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