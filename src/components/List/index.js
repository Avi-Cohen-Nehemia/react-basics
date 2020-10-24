import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({inputValue: value});
    }

    handleSubmit(e) {
        // when submitting forms in react we need to prevent the page from refreshing
        // by passing e as an argumant and calling the e.preventDefault() method
        e.preventDefault();

        const { list, inputValue } = this.state;

        this.setState({list: [...list, inputValue]});
    }

    render() {
        const { inputValue, list } = this.state;

        return (
            <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='list'>{'Add something to your list:'}</label>
                        <input
                            id='list'
                            value={inputValue}
                            onChange={(e) => this.handleChange(e)}
                            className='form-control'
                            type='text'
                        />
                    </div>
                </div>
                <button className='btn btn-primary' onClick={this.handleSubmit}>Add</button>
            </form>
            <ul className="list-group" style={{maxWidth: '400px'}}>
                {list ?
                    list.map((item, index) => (
                        <li className="list-group-item" key={index}>{item}</li>
                    ))
                : null
                }
            </ul>
          </>
        );
    }
}

export default List;
