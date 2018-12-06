import React from 'react';
import AnimalListItem from "./animal-list-item";

export const AnimalList = ({animals}) => {
    return (
        <ul className="list-group list-group-flush">
            {animals.map((animal) =>
                <AnimalListItem key={animal.id}
                                animal={animal}
                                form={animal.name+'Form'}
                />
            )}
        </ul>
    )
};