import { heroku_home_page } from "../pw-impl/heroku_home_page"
class ToolFactory {
    constructor() {
        
    }
    getHomePage(){
        return new heroku_home_page(null);
    }
}