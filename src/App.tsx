import React, { useEffect, useState } from 'react';
import { Board } from './lib/models/board/Board';
import { GameManager } from './lib/models/gameNamager/GameNamager';

function App() {
	const [board, setBoard] = useState(new Board());

  console.log(board);

  useEffect(()=> {
    setTimeout(()=> {
      setBoard(board)
    }, 10000)
  })

	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
