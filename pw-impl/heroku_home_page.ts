import { homepage_actions } from "../operations/heroku_home_page_operations";
import { expect, Locator, Page } from '@playwright/test';
export class heroku_home_page implements homepage_actions {
    constructor() {
        
    }
    getTitle: () => string;
    getSubTitle: () => string;
    getExamples: () => string[];
    getRepo: () => string;
    getBanner: () => string;
}