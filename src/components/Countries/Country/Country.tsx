import React from 'react';

interface Props {
    name: string;
    onClick: () => void;
}

const Country: React.FC<Props> = ({name}) => {
    return (
        <span>{name}</span>
    );
};

export default Country;