import React from 'react';

interface Props {
    name: string;
    onClick: () => void;
}

const CountryItem: React.FC<Props> = ({name}) => {
    return (
        <span>{name}</span>
    );
};

export default CountryItem;