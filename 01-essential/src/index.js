import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

render(
  <div>
    <SkiDayCount backcountry="false"/>
    <SkiDayList days={
      [
        {
          resort: "Squaw Valley",
          date: new Date("1/15/2018"),
          powder: true,
          backcountry: false
        },
        {
          resort: "Kirkwood",
          date: new Date("3/29/2017"),
          powder: false,
          backcountry: false
        },
        {
          resort: "Mt. Tallac",
          date: new Date("4/2/2017"),
          powder: false,
          backcountry: true
        }
      ]}
    />
  </div>,
  document.getElementById("react-container")
)

