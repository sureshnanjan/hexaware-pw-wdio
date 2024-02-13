/**
 * 
 */
export interface add_remove_actions{
    addElement: () => Promise<void>;
    getAddedElements: () => Promise<string[]>;
    /**
     * 
     * @param position This is an optional position to mention which element position should be remove , if not provided the first element will be removed
     * @returns 
     */
    removeElement: (position?: number) => Promise<void>; 
    
}
