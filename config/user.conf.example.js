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
            ROOT: "...", //s.unibuc address without dot between first and last name
            FULL: "..." //any other address
        },
        PASSWORD: ""
    } 
}

export {
    USER
}