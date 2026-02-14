import React from "react";
import HomeContent from "../components/home/HomeContent";
import Opened_letter_content from "../components/home/Opened_letter_content";
import { useState } from "react";

const HomeScreen = () => {

    const [isLetterOpened, setIsLetterOpened] = useState(false);

    return (
        <>
        {!isLetterOpened ? (
            <HomeContent onOpen={() => setIsLetterOpened(true)} />
        ) : (
            <Opened_letter_content onClose={() => setIsLetterOpened(false)} />
        )}
        </>
    )
}

export default HomeScreen