import React from 'react';
import {CountryInfo} from "../../types";

interface Props {
    country: CountryInfo | undefined;
}

const CurrentCountryBlock: React.FC<Props>  = ({country}) => {
    return country && (
        <div>
            {country.name}
        </div>
    );
};

export default CurrentCountryBlock;