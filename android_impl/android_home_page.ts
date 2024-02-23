import { homepage_actions } from "../operations/heroku_home_page_operations";
class android_home_page implements homepage_actions{

    // Appium library
    getTitle: () => string;
    getSubTitle: () => string;
    getExamples: () => string[];
    getRepo: () => string;
    getBanner: () => string;
    gotToExample: (string: any) => string;
}