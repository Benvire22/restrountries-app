import React from 'react';
import CountryItem from "./Country/CountryItem";
import {Country} from "../../types";

interface Props {
    countries: Country[];
    onClick: (code: string) => void;
}

const Countries: React.FC<Props> = ({countries, onClick}) => {
    return (
        <div>
            {countries.length > 0 ? countries.map((country) => (
                <CountryItem name={country.name} key={country.code} onClick={() => onClick(country.code)} />
            )) : (
                <h3>Country list is empty!</h3>
            )}
        </div>
    );
};

export default Countries;