export interface Country {
    name: string;
    alpha3Code: string;
}

export interface CountryInfo {
    name: string;
    code: string;
    borders: string[];
    capital: string;
    flag: string;
    region: string;
}