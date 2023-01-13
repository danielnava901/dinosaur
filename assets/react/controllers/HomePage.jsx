import React, {useEffect, useState} from 'react';
import LeftSide from "./components/LeftSide";

const leftSideOptions = [
    {
        id: 1,
        name: "Daniel Nava Viveros"
    },
    {
        id: 2,
        name: "Benito Juarez"
    },
    {
        id: 3,
        name: "Pedro Baez"
    }
];

const HomePage = ({dummyUrl, chatUrl}) => {
    const [currentChatOption, setCurrentChatOption] = useState(null)
    const [currentChatUrl, setCurrentChatUrl] = useState("");

    useEffect(() => {
        setCurrentChatUrl(dummyUrl);
    }, []);

    return <div className="w-full h-full flex flex-grow-0">
        <LeftSide options={leftSideOptions} onClickOption={(option) => {
            console.log(option);
            setCurrentChatOption(option);
            let url = chatUrl.replace("__THE_OTHER_ID__", option.id);
            console.log("url", url);
            setCurrentChatUrl(url);
        }}/>
        <div className="w-full h-full flex-grow">
            <iframe className="w-full h-full" src={currentChatUrl} frameBorder="0"></iframe>
        </div>
    </div>
};

export default HomePage;