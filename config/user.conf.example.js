//  In this folder "user.conf.js" should be created with the structure below, replacing with the proper fields.

const USER = { 
    VALID: { 
        EMAIL: "....@s.unibuc.ro",
        PASSWORD: "",
        NAME: { 
            FIRST: "",
            LAST: ""
        }
    },
    INVALID: { 
        EMAIL: {
            DOMAIN: "...@s.unibuc.roo",
            ROOT: "..."  //any other address
        },
        PASSWORD: ""
    } 
}

export {
    USER
}