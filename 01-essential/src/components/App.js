import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'


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

  countDays(filter) {
    const { allSkiDays } = this.state
    return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
  }

  render() {
    return (
      <div className="app">
        <SkiDayCount total={this.countDays()}
                     powder={this.countDays("powder")}
                     backcountry={this.countDays("backcountry")}/>
        <SkiDayList days={this.state.allSkiDays}/>
      </div>
    )
  }

}
