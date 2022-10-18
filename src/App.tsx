import React, { useMemo, useState } from 'react'
import { BoardData } from './lib/models/board/Board'
import { GameManager } from './lib/models/gameMamager/GameManager'
import BoardDrawer from './components/Board/Board'

const App: React.FC = () => {
  const [board, setBoard] = useState(new BoardData())
  const gameManager = useMemo<GameManager>(() => new GameManager({ board, setBoard }), [])

  console.log('file: App.tsx ~ line 10 ~ gameManager', gameManager)

  return (
    <div className='App'>
      <header className='App-header'>
        <BoardDrawer board={board} />
      </header>
    </div>
  )
}

export default App
