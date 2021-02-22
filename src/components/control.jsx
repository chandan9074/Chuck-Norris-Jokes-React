import React from 'react';
import Jokes from './jokes.jsx';
import Spinner from './spinner.jsx';

const Control = ({jokes, isLoading, finalHenJokes}) => {
    return ( 
        <div>
            {isLoading ? <Spinner />
            :<Jokes jokes={jokes} henJokes={finalHenJokes}/>}
        </div>
     );
}
 
export default Control;