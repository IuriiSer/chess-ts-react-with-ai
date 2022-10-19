import React, { useMemo, useState } from 'react'

import './App.scss'

import BoardData from './lib/models/board/Board'
import GameManager from './lib/models/gameMamager/GameManager'
import BoardDrawer from './components/Board/Board'
import ThemeHandler from './components/ThemeHandler/ThemeHandler'

import { Container } from '@mui/material'

const App: React.FC = () => {
  const [board, setBoard] = useState(new BoardData())
  const gameManager = useMemo<GameManager>(() => new GameManager({ board, setBoard }), [])

  console.log('file: App.tsx ~ line 10 ~ gameManager', gameManager)

  return (
    <ThemeHandler>
      <Container className='App'>
        <BoardDrawer board={board} />
      </Container>
    </ThemeHandler>
  )
}

export default App
