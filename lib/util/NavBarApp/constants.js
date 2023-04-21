import { USER } from "../../../config/user.conf.js"

const UriPath = {
    MAIN: 'moodle.unibuc.ro/my/courses.php',
    HOME: 'moodle.unibuc.ro/?redirect=0',
    DASHBOARD: 'moodle.unibuc.ro/my/',
}

const PageTitle = {
    DASHBOARD: 'Tablou de bord',
    HOME: 'Campus virtual Moodle Unibuc',
    MAIN: 'Cursurile mele',
    NOTIFICATIONS: 'Notificări',
    WELCOME: `Bine ați revenit, ${USER.VALID.NAME.FIRST}`
}

const NavBarOptions = ['MAIN', 'DASHBOARD', 'HOME'];

export {
    UriPath,
    PageTitle,
    NavBarOptions
}