import {useState} from "react";
import Countries from "./components/Countries/Countries";
import {Country, CountryInfo} from "./types";
import "./App.css";
import CurrentCountryBlock from "./components/CurrentCountryBlock/CurrentCountryBlock";

const App = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [currentCountry, setCurrentCountry] = useState<CountryInfo | undefined>();

    const requestCountryInfo = async (code: string) => {
        console.log(code);
    };

    return (
        <div className="App">
            <Countries countries={countries} onClick={requestCountryInfo} />
            <CurrentCountryBlock country={currentCountry} />
        </div>
    );
};

export default App;