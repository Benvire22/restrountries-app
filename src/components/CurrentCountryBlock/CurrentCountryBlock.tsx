import React from 'react';
import {CountryInfo} from "../../types";
import "./CurrentCountryBlock.css";

interface Props {
    country: CountryInfo | null;
}

const CurrentCountryBlock: React.FC<Props>  = ({country}) => {
    return country ? (
        <div className="CurrentCountryBlock">
            <div className="CurrentCountryBlock-top">
                <div className="CurrentCountryBlock-info">
                    <h1 className="CurrentCountryBlock-title">{country.name}</h1>
                    <p className="CurrentCountryBlock-descr">
                        <span>Capital: <strong>{country.capital || '---------'}</strong></span>
                        <span>Population: <strong>{country.population}</strong></span>
                        <span>Region: <strong>{country.region}</strong></span>
                    </p>
                </div>
                <div className="CurrentCountryBlock-flag"><img src={country.flag} alt={country.name}/></div>
            </div>
            <div>
                {country.borders ? (
                    <>
                        <h3>Borders with:</h3>
                        <ol className="CurrentCountryBlock-borders">
                            {country.borders.map((border) => <li key={border}>{border}</li>)}
                        </ol>
                    </>
                ) : <h3>Country no have borders:</h3>}
            </div>
        </div>
    ) : <div>
        <h1>Empty, select some country</h1>
    </div>;
};

export default CurrentCountryBlock;