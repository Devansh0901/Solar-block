import { useState } from 'react'
import './App.css'

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import Header from './Components/Header'

import { Loader } from '@mantine/core'
import { MantineProvider } from '@mantine/core';

import Home from './Components/Home'
import Analytics from './Components/Analytics'

function App() {

  let routes;

  routes = (
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/Home' Component={Home}></Route>
      <Route path='/Plants' Component={Analytics}></Route>
    </Routes>
  )
  return (
    <>
    <BrowserRouter>
      <MantineProvider defaultColorScheme="light">
        <Header/>
        <main>
          {routes}
        </main>
      </MantineProvider>
    </BrowserRouter>
    </>
  );
}

export default App
