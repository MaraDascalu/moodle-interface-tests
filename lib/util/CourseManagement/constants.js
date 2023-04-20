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

const FilterOptions = {

    SemesterOptions: {
        ALL: 'Toate semestrele',
        FIRST: 'Semestrul I',
        SECOND: 'Semestrul II'
    },

    YearOptions: {
        CURRENT: '2022-2023',
        PREVIOUS: '2021-2022'
    },

    ProgressOptions: {
        ALL: 'Show all courses except archived courses',
        INPROGRESS: 'Show courses in progress',
        PAST: 'Show past courses'
    },

    SortOptions: {
        ACCESS: 'lastaccessed',
        TITLE: 'title'
    }

}

const PageTitle = {
    WELCOME: `Bine ați revenit, ${USER.VALID.NAME.FIRST}! 👋`
}

const UriPath = 'https://moodle.unibuc.ro/my/courses.php';

export {
    CourseTitles,
    PageTitle,
    FilterOptions,
    UriPath,
}