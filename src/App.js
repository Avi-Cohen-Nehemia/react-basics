import React from 'react';
import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import People from './components/People';
import Basket from './components/Basket';
import FadeIn from './components/FadeIn';
import Clicked from './components/Clicked';
import ToggleText from './components/ToggleText';
import Counter from './components/Counter';
import StepCounter from './components/StepCounter';
import CatchMeIfYouCan from './components/CatchMeIfYouCan';
import RollCall from './components/RollCall';
import Colors from './components/Colors';
import Length from './components/Length';
import PasswordStrength from './components/PasswordStrength';
import TempConvertor from './components/TempConvertor';
import List from './components/List';
import Adder from './components/Adder';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router className='container ml-4'>
            {/* any component that is inside the Router but not in a Route a component
             will appear in every route we will visit*/}
            <Header>Hello world!</Header>

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

            <Route exect path='/paragraph'>
                  <Paragraph>I am the 'children' prop!</Paragraph>
            </Route>

            <Route exact path='/people'>
                <People
                    // props are variables we pass down to a component to use
                    names={ ['Zoe', 'Hillary', 'Matt', 'Richard', 'Alice', 'Erica', 'Danielle', 'Avi'] }
                />
            </Route>

            <Route exact path='/basket'>
                <Basket
                    items={[
                        { name: 'Coffee', price: 2.10 },
                        { name: 'Bananas', price: 3.50 },
                        { name: 'Milk', price: 250.65 },
                        { name: 'The Great Milk Shortage by Simon Schama', price: 12.99 },
                    ]}
                />
            </Route>

            <Route exact path='/fade-in'>
                <FadeIn time={ '3000ms' }>Hello</FadeIn>
            </Route>

            {/* we can make a component's props change by passing values to the url */}
            <Route
                exact path='/catch-me-if-you-can/:jump'
                render={({ match }) => <CatchMeIfYouCan jump={ match.params.jump }/>}
            />

            {/* examples for routing propless components*/}
            <Route path='/length' component={ Length }/>
            <Route path='/password-srength' component={ PasswordStrength }/>
            <Route path='/temp-convertor' component={ TempConvertor }/>
            <Route path='/list' component={ List }/>
            <Route path='/adder' component={ Adder }/>

            <Footer links={[
                'clicked',
                'toggle-text',
                'counter',
                'step-counter',
                'roll-call',
                'colors',
                'paragraph',
                'people',
                'basket',
                'fade-in',
            ]}/>
        </Router>
    );
}

export default App;
