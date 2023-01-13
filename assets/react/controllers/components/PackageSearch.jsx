import React from 'react';

const PackageSearch = ({name}) => {

    return (
        <div>
            Search {name}
        </div>
    );
};

PackageSearch.defaultProps = {
    name: "Dino :D"
}

export default PackageSearch;
