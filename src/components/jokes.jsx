import React from 'react';

const Jokes = ({jokes, henJokes}) => {
    return ( 
        <div className="body">
            <div className="card_style">
                <p className="caption_style">{jokes}</p>
                <br></br>
                <div className="btn_align">
                    <button className="btn_style" onClick={henJokes}>ANOTHER JOKES</button>
                </div>
            </div>
        </div>
     );
}
 
export default Jokes;