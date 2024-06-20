import {useCallback, useEffect, useState} from "react";
import Countries from "./components/Countries/Countries";
import {Country, CountryInfo} from "./types";
import "./App.css";
import CurrentCountryBlock from "./components/CurrentCountryBlock/CurrentCountryBlock";
import axios from "axios";
import {ALL_COUNTRIES_URL, REST_COUNTRIES_URL} from "./constants";

const App = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [currentCountry, setCurrentCountry] = useState<CountryInfo | null>(null);

    const apiRequest  = useCallback( async () => {
        try {
            const {data} = await axios.get<Country[]>(REST_COUNTRIES_URL + ALL_COUNTRIES_URL);
            console.log(data);
            setCountries(data);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const requestCountryInfo = async (code: string) => {
        console.log('Code', code);
    };

    useEffect(() => {
        void apiRequest();
    }, [apiRequest])


    return (
        <div className="App">
            <Countries countries={countries} onClick={requestCountryInfo} />
            <CurrentCountryBlock country={currentCountry} />
        </div>
    );
};

export default App;