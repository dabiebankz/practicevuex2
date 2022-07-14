class AllResponse {
    static register = {
        message: null,
        code: null
    }

    static getUser = {
        data:{
            username: null,
            email: null
        },
        message: null,
        code: null
    }

    static addContact = {
        data:{
            id: null,
            contact_phone: null,
            contact_name: null,
            contact_image: null,
            email: null
        },
        message : null,
        code: null
    }

    static getContact = {
        data:[
            {
                id: null,
                contact_phone: null,
                contact_name: null,
                contact_image: null
            },
            {
                id: null,
                contact_phone: null,
                contact_name: null,
                contact_image: null
            }
        ],
        message: null,
        code: null
    }
}

export default AllResponse;