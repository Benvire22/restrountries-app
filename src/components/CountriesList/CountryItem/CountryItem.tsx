import React from 'react';
import "./CountryItem.css";

interface Props {
    name: string;
    onClick: () => void;
}

const CountryItem: React.FC<Props> = ({name, onClick}) => {
    return (
        <li className="CountryItem" onClick={onClick}>{name}</li>
    );
};

export default CountryItem;