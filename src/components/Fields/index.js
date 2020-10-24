import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fields extends Component {
    constructor(props) {
        super(props);
        const { fields } = props;

        this.state = {
            values: fields.map(() => ''),
            submitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, index) {
        let values = this.state.values;
        values[index] = e.currentTarget.value;

        this.setState({ values: values });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
    }

    render() {
        const { values, submitted } = this.state;
        const { fields } = this.props;

        return (
            <>
            <form>
                {fields.map((field, index) => (
                    <div className="form-row" key={index}>
                        <div className="form-group col-md-4">
                            <label htmlFor={field}>{field}</label>
                            <input
                                id={field}
                                value={values[index]}
                                onChange={(e) => this.handleChange(e, index)}
                                className={ "form-control" + (!submitted || values[index] !== "" ? "" : " is-invalid")}
                                type='text'
                            />
                            { !submitted || values[index] !== "" ? null : <p className="invalid-feedback">{`${field} is required`}</p>}
                        </div>
                    </div>
                ))}
            </form>
            <button
                className='btn btn-primary'
                onClick={this.handleSubmit}
            >
                Submit
            </button>
          </>
        );
    }
}

Fields.propTypes = {
    fields: PropTypes.array.isRequired,
}

export default Fields;
