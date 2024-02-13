import { add_remove_actions } from "./add_remove-operations";
import { homepage_actions } from "./heroku_home_page_operations";

export type HerokuAppType = add_remove_actions | homepage_actions;

export enum HerokuAppPages {
    add_remove = "Add/Remove Elements",
    ab_testing = "A/B Testing",
    basic_auth = "Basic Auth",
    broken_images = "Broken Images",
<<<<<<< HEAD
    context_menu = "Context Menu",
    selectDropdown = "Dropdown"
=======
    context_menu = "Context Menu"
>>>>>>> c666585 (update with suresh changes)
  }