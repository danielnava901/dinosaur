import React from 'react';
import PackageSearch from "./components/PackageSearch";

const DinoPage = ({name}) => {
    return <>
        <PackageSearch name={name}/>
    </>
};

export default DinoPage;