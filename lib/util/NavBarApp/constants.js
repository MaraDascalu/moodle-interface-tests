import { USER } from "../../../config/user.conf.js"

const UriPath = {
    MAIN: 'moodle.unibuc.ro/my/courses.php',
    HOME: 'moodle.unibuc.ro/?redirect=0'
}

const PageTitle = {
    HOME: 'Campus virtual Moodle Unibuc',
    MAIN: 'Cursurile mele',
    WELCOME: `Bine ați revenit, ${USER.VALID.NAME.FIRST}`
}

export {
    UriPath,
    PageTitle
}