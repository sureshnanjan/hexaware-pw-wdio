
/**
 * Performs Drag and Drop actions from A to B and vise versa
 */

export interface drag_drop_actions{
    getTitle: () => Promise<string|null>;
    dragElement: () => Promise<void>;
    dropElement: () => Promise<void>;
    getFooterTitle: () => Promise<string|null>;
    
}