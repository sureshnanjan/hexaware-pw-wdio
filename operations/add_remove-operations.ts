/**
 * 
 */
export interface add_remove_actions{
<<<<<<< HEAD
    addElement: () => Promise<void>;
    getAddedElements: () => Promise<string[]>;
    /**
     * 
     * @param position This is an optional position to mention which element position should be remove , if not provided the first element will be removed
     * @returns 
     */
    removeElement: (position?: number) => Promise<void>; 
    
=======
    addElement: () => void;
    getAddedElements: () => number;
>>>>>>> 922fa11 (update all scenarios)
}