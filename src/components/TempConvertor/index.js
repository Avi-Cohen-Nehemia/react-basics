import React, { Component } from 'react';

class TempConvertor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celsius: '',
            fahrenheit: ''
        }

        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
    }

    handleCelsius(e) {
        let celsiusValue = e.currentTarget.value;

        this.setState({
            celsius: celsiusValue,
            fahrenheit: celsiusValue !== '' ? celsiusValue * 1.8 + 32 : ''
        });
    }

    handleFahrenheit(e) {
        let fahrenheitsValue = e.currentTarget.value;

        this.setState({
            celsius: fahrenheitsValue !== '' ? (fahrenheitsValue - 32) / 1.8 : '',
            fahrenheit: fahrenheitsValue
        });
    }

    render() {
        const { celsius, fahrenheit } = this.state;

        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='celsius'>{'°C'}</label>
                        <input
                            id='celsius'
                            value={celsius}
                            onChange={(e) => this.handleCelsius(e)}
                            className='form-control'
                            type='number'
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='fahrenheit'>{'°F'}</label>
                        <input
                            id='fahrenheit'
                            value={fahrenheit}
                            onChange={(e) => this.handleFahrenheit(e)}
                            className='form-control'
                            type='number'
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default TempConvertor;
