import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Header from './../Header';
import Square from './../Square';
import Paragraph from './../Paragraph';
import People from './../People';
import Basket from './../Basket';
import FadeIn from './../FadeIn';
import Clicked from './../Clicked';
import ToggleText from './../ToggleText';
import Counter from './../Counter';
import StepCounter from '../StepCounter';
import CatchMeIfYouCan from './../CatchMeIfYouCan';
import RollCall from './../RollCall';
import Colors from './../Colors';
import Length from './../Length';
import PasswordStrength from './../PasswordStrength';
import TempConvertor from './../TempConvertor';
import List from './../List';
import Adder from './../Adder';
import Transform from './../Transform';
import Fields from './../Fields';

const Stuff = ({ square }) => {
    return (
        <Router className='container ml-4'>
            { /* any value we pass into a component that is not defined as a prop will be regarded as the 'children' prop */}
            <Header>Hello world!</Header>

            <Route exect path='/paragraph'>
                <Paragraph>I am the 'children' prop!</Paragraph>
            </Route>

            <Route exact path='/square'>
                { square ? <Square color={ 'hotpink' } /> : null }
            </Route>

            <Route exact path='/people'>
                <People
                    // props are variables we pass down to a component to use
                    names={ ['Zoe', 'Hillary', 'Matt', 'Richard', 'Alice', 'Erica', 'Danielle', 'Avi'] }
                />
            </Route>

            <Route exact path='/basket'>
                <Basket
                    items={ [
                        { name: 'Coffee', price: 2.10 },
                        { name: 'Bananas', price: 3.50 },
                        { name: 'Milk', price: 250.65 },
                        { name: 'The Great Milk Shortage by Simon Schama', price: 12.99 },
                    ] }
                />
            </Route>

            <Route exact path='/fade-in'>
                <FadeIn time={ '3000ms' }>Hello</FadeIn>
            </Route>

            {/* we can pass a component that have no props in the 'component' prop of the Route
             the path prop is used to specify the url that will appear when visiting this component
             pass the 'exact' prop to prevent similar routes from directing to wrong pages */}
            <Route exact path='/clicked' component={ Clicked }/>
            
            {/* when a Route needs to have multiple components or the component its routing to
             has props we need to wrap them in Route like done below */}
            <Route exact path='/toggle-text'>
                <ToggleText
                    initial={ 'Hello' }
                    alternate={ 'World' }
                />
            </Route>

            {/* examples for routing components that have props or children */}
            <Route exact path='/counter'>
                <Counter
                    initial={ 50 }
                    max={ 100 }
                />
            </Route>

            <Route exact path='/step-counter'>
                <StepCounter
                    max={ 100 }
                    step={ 5 }
                />
            </Route>

            {/* we can make a component's props change by passing values to the url */}
            <Route
                exact path='/catch-me-if-you-can/:jump'
                render={({ match }) => <CatchMeIfYouCan jump={ match.params.jump }/>}
            />

            <Route exact path='/roll-call'>
                <RollCall
                    names={ ['Zoe', 'Hillary', 'Matt', 'Richard', 'Alice', 'Erica', 'Danielle', 'Avi'] }
                />
            </Route>

            <Route exact path='/colors'>
                <Colors
                    colors={ ["#C14412", "#EBB31A", "#8F5318", "#009EAD", "#395967",] }
                />
            </Route>

            {/* examples for routing propless components*/}
            <Route path='/length' component={ Length }/>
            <Route path='/password-srength' component={ PasswordStrength }/>
            <Route path='/temp-convertor' component={ TempConvertor }/>
            <Route path='/list' component={ List }/>
            <Route path='/adder' component={ Adder }/>

            <Transform transform={ x  => x * x }/>
            <Transform transform={ x  => x + x }/>
            <Transform transform={ x  => x / 2 }/>
            <Fields fields ={ ["First Name", "Last Name", "Email"] }/>
        </Router>
    )
}

Stuff.defaultProps = {
    square: true,
}

Stuff.propTypes = {
    square: PropTypes.bool,
}

export default Stuff;