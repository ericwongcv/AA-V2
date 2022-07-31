import { createContext, useContext, useState } from "react";
import speedy from '../pups/speedy-pup.jpg';
import banana from '../pups/banana-pup.jpg';
import sleepy from '../pups/sleepy-pup.jpg';

export const usePuppyType = () => {
    return useContext(PupContext);
}

export const PupContext = createContext();

export const PupProvider = (props) => {
    const [puppyType, setPuppyType] = useState(speedy);

    return (
        <PupContext.Provider value={{ puppyType, setPuppyType }}>
            {props.children}
        </PupContext.Provider>
    )
};
