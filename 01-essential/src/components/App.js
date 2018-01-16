import { Component } from 'react'
import { SkiDayList } from './SkiDayList.js'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSkiDays: [
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
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <SkiDayList days={this.state.allSkiDays}/>
      </div>
    )
  }

}
