import { HerokuAppType, HerokuAppPages } from "./heroku_app_type";
/**
 * This interface caoture all operation srelated to the Heroku Home Page
 */
export interface homepage_actions { 
    /**
     * THis metghod reads and return the Title of the Heroku Page
     * @returns 
     */
    getTitle: () => Promise<string|null>; // PascalCase
    /**
     * 
     */
    getSubTitle: () => Promise<string|null>;
    /** */
    getExamples: () => Promise<string[]>;
    /** */
    getRepo: () => Promise<string>;
    /** */
    getBanner: () => Promise<string>;
    /** */

    goToExample: (name:HerokuAppPages) => Promise<HerokuAppType>;

    // 1 + 2
    //sureeiuiuoiTest
}
