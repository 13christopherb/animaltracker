import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {TransportCard} from "../transports/transport-card";

export const LocationCardFooter = ({locationName, transports}) => {
    return (
        <footer className="card-footer bg-transparent">
            {transports &&
            <div>
                <button className="btn btn-primary btn-sm" type="button" data-toggle="collapse"
                        data-target={'#collapse' + locationName} aria-expanded="false">
                    <FontAwesomeIcon icon="chevron-down"/> Transports
                </button>
                <div className="collapse" id={'collapse' + locationName}>
                    <TransportCard transports={transports} />
                </div>
            </div>
            }
        </footer>
    )
};