import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store'

import RegistrationStage from './components/registration-stage'
import RegistrationForm from './components/registration-form'

import './App.css'

function App (): JSX.Element {
  return (
    <Provider store={store}>
      <main>
      <RegistrationStage />
      <RegistrationForm />
      </main>
    </Provider>
  )
}

export default App
