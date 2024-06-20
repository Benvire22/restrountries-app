import React from 'react';
import Country from "./Country/Country";
import {CountryInfo} from "../../types";

interface Props {
    countries: CountryInfo[];
    onClick: (code: string) => void;
}

const Countries: React.FC<Props> = ({countries, onClick}) => {
    return (
        <div>
            {countries.length > 0 ? countries.map((country) => (
                <Country name={country.name} key={country.code} onClick={() => onClick(country.code)} />
            )) : (
                <h3>Country list is empty!</h3>
            )}
        </div>
    );
};

export default Countries;