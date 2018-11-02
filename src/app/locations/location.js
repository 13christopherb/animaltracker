import React from 'react';
import Animals from "../animals/animals";

export const Location = (props) => {
    return (
        <div>
            <a className="btn btn-info btn-block" data-toggle="collapse"
               href={'#'+ props.locationName} role="button"
               aria-expanded="false">
                <div className='row'>
                    <div className='col-md-1 offset-md-5'>{props.locationName}</div>
                    <div className='col-md-1 '><small>{props.speciesCount}</small></div>
                </div>
            </a>
            <div className="collapse show" aria-expanded="true" id={props.locationName}>
                <Animals animals={props.animals}/>
            </div>
        </div>
    )
};