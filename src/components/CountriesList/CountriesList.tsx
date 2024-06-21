import React from 'react';
import CountryItem from "./CountryItem/CountryItem";
import {Country} from "../../types";
import "./CountriesList.css";

interface Props {
    countries: Country[];
    onClick: (code: string) => void;
}

const CountriesList: React.FC<Props> = ({countries, onClick}) => {
    return (
        <nav className="CountriesList">
            {countries.length > 0 ?
                (
                    <ul>
                        {countries.map((country) => (
                            <CountryItem
                                key={country.alpha3Code + country.name}
                                name={country.name}
                                onClick={() => onClick(country.alpha3Code)}
                            />
                        ))}
                    </ul>)
                : <h3 className="CountriesListTitle">Countries list is empty!</h3>}
        </nav>

    );
};

export default CountriesList;