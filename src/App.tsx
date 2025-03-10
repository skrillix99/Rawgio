import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
   <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
    >
    <GridItem gridArea="header" bg="tomato">
      nav
    </GridItem>
    <Show above='lg'>
      <GridItem gridArea="main" bg="orange">
        main
      </GridItem>
    </Show>
   </Grid>
  )


}

export default App
