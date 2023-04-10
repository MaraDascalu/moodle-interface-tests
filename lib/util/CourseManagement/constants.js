import { USER } from "../../../config/user.conf.js"


const CourseTitles = {
    AA: 'Algoritmi avansați',
    AF: 'Algoritmi fundamentali',
    CC: 'Calculabilitate și complexitate',
    CAVA: 'Concepte și aplicații în Vederea Artificială',
    ANNOUNCEMENTS: 'Anunțuri studenți',
    MFIS: 'Metode Formale in Ingineria Software',
    ESLA: 'Elemente de securitate si logica aplicata'
}

const SemesterOptions = {
    ALL: 'Toate semestrele',
    FIRST: 'Semestrul I',
    SECOND: 'Semestrul II'
}

const YearOptions = {
    CURRENT: '2022-2023',
    PREVIOUS: '2021-2022'
}

const ProgressOptions = {
    ALL: 'Show all courses except archived courses',
    INPROGRESS: 'Show courses in progress',
    PAST: 'Show past courses'
}

const SortOptions = {
    ACCESS: 'lastaccessed',
    TITLE: 'title'
}

const WelcomeTitle = `Bine ați revenit, ${USER.VALID.NAME.FIRST}! 👋`;

const UriPath = 'https://moodle.unibuc.ro/my/courses.php';

export {
    CourseTitles,
    WelcomeTitle,
    SemesterOptions,
    YearOptions,
    ProgressOptions,
    SortOptions,
    UriPath,
}