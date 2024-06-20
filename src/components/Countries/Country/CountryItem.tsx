import React from 'react';

interface Props {
    name: string;
    onClick: () => void;
}

const CountryItem: React.FC<Props> = ({name, onClick}) => {
    return (
        <span onClick={onClick}>{name}</span>
    );
};

export default CountryItem;