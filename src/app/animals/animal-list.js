import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import AnimalListItem from "./animal-list-item";

export const AnimalList = ({animals}) => {
    return (
        <ListGroup variant="flush">
            {animals.map((animal) =>
                <AnimalListItem key={animal.id}
                                animal={animal}
                                form={animal.name+'Form'}
                />
            )}
        </ListGroup>
    )
};