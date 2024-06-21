import {useCallback, useEffect, useState} from 'react';
import CountriesList from './components/CountriesList/CountriesList';
import {BorderCountry, Country, CountryInfo} from './types';
import './App.css';
import CurrentCountryBlock from './components/CurrentCountryBlock/CurrentCountryBlock';
import axios from 'axios';
import {ALL_COUNTRIES_URL, ALPHA_CODE_URL, COUNTRY_NAME_URL, REST_COUNTRIES_URL} from './constants';
import Loader from './components/ul/Loader';

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentCountry, setCurrentCountry] = useState<CountryInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.get<Country[]>(REST_COUNTRIES_URL + ALL_COUNTRIES_URL);
      console.log(data);
      setCountries(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const requestCountryInfo = useCallback(async (code: string) => {
    try {
      setIsLoading(true);
      if (code && code !== currentCountry?.alpha3Code) {
        const {data} = await axios.get<CountryInfo>(REST_COUNTRIES_URL + ALPHA_CODE_URL + code);
        console.log(data);

        if (data.borders) {
          const promises = data.borders.map(async (border) => {
            return await axios.get<BorderCountry>(REST_COUNTRIES_URL + ALPHA_CODE_URL + border + COUNTRY_NAME_URL);
          });
          const countries = await Promise.all(promises);

          const borders = countries.map((country) => {
            const {data} = country;
            return data.name;
          });

          const country = {
            name: data.name,
            capital: data.capital,
            flag: data.flag,
            alpha3Code: data.alpha3Code,
            borders: borders,
            region: data.region,
            population: data.population
          };
          setCurrentCountry(country);
        } else {
          const country = {
            name: data.name,
            capital: data.capital,
            flag: data.flag,
            alpha3Code: data.alpha3Code,
            region: data.region,
            population: data.population
          };
          setCurrentCountry(country);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [currentCountry]);

  useEffect(() => {
    apiRequest().catch(e => console.error(e));
  }, [apiRequest]);

  return (
    <div className="App" style={{display: 'flex'}}>
      <Loader isLoading={isLoading} color={'#fff'}/>
      <CountriesList countries={countries} onClick={requestCountryInfo}/>
      <CurrentCountryBlock country={currentCountry}/>
    </div>
  );
};

export default App;