import { HerokuAppPages, HerokuAppType } from "../operations/heroku_app_type";
import { homepage_actions } from "../operations/heroku_home_page_operations";
import { $, $$ } from '@wdio/globals';
export class heroku_home_page implements homepage_actions {
    
    getTitle(){
        return $("").textContent();
    };
    getSubTitle: () => Promise<string | null>;
    getExamples: () => Promise<string[]>;
    getRepo: () => Promise<string>;
    getBanner: () => Promise<string>;
    goToExample: (name: HerokuAppPages) => Promise<HerokuAppType>;
}