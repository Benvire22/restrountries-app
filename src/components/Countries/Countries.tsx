import React from 'react';
import CountryItem from "./Country/CountryItem";
import {Country} from "../../types";

interface Props {
    countries: Country[];
    onClick: (code: string) => void;
}

const Countries: React.FC<Props> = ({countries, onClick}) => {
    return (
        <ul>
            {countries.length > 0 ? countries.map((country) => (
                <li key={country.alpha3Code + country.name}>
                    <CountryItem name={country.name} key={country.alpha3Code} onClick={() => onClick(country.alpha3Code)} />
                </li>
            )) : (
                <h3>Country list is empty!</h3>
            )}
        </ul>
    );
};

export default Countries;