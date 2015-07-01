import React from 'react';
import './Game.scss';

class Game extends React.Component {

/**
* Render method.
*
* @method render
* @return Markup for the component
*/
render() {
return (
<div className="game">
<Grid />
<Snake />
<Score />
</div>
);
}
}

export default Game;
