export interface Country {
    name: string;
    alpha3Code: string;
}

export interface CountryApi {
    name: string;
    borders: string[];
    capital: string;
    flag: string;
    region: string;
    alpha3Code: string;
    population: number;
}

export interface CountryInfo {
    name: string;
    alpha3Code: string;
    borders?: string[];
    capital: string;
    flag: string;
    region: string;
    population: number;
}

export interface BorderCountry {
    name: string;
}