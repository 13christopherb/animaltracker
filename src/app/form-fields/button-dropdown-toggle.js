import React from 'react';
import Button from 'react-bootstrap/lib/Button';


export class ButtonDropdownToggle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <Button variant={this.props.variant}
                    className="float-right"
                    size={this.props.size}
                    onClick={this.handleClick}
            >
                {this.props.children}
            </Button>
        );
    }
}