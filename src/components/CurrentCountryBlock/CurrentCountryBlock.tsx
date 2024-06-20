import React from 'react';
import {CountryInfo} from "../../types";

interface Props {
    country: CountryInfo | null;
}

const CurrentCountryBlock: React.FC<Props>  = ({country}) => {

    console.log(country?.borders);
    return country && (
        <div>
            <div>
                <div>
                    <h1>Name: {country.name}</h1>
                    <p>
                        <span>Capital: {country.capital}</span>
                        <span>Population: {country.population}</span>
                    </p>
                </div>
                <div><img src={country.flag} alt={country.name} style={{width: 50, height: 50}} /></div>
            </div>
            <div>
                {country.borders ? (
                    <>
                        <h3>Borders with:</h3>
                        <ul>
                            {country.borders.map((border) => <li key={border}>{border}</li>)}
                        </ul>
                    </>
                ) : <h3>Country no have borders:</h3>}
            </div>

        </div>
    );
};

export default CurrentCountryBlock;