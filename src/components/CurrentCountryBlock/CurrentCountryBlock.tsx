import React from 'react';
import {CountryInfo} from "../../types";

interface Props {
    country: CountryInfo | null;
}

const CurrentCountryBlock: React.FC<Props>  = ({country}) => {
    return country && (
        <ul>
            {country.name}
        </ul>
    );
};

export default CurrentCountryBlock;