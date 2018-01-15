import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'
import './stylesheets/ui.scss'

window.React = React

render(
  <SkiDayCount />,
  document.getElementById("react-container")
)

