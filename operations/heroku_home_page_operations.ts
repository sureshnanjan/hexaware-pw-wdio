export interface homepage_actions { 
    getTitle: () => string;
    getSubTitle: () => string;
    getExamples: () => string[];
    getRepo: () => string;
    getBanner: () => string;
}