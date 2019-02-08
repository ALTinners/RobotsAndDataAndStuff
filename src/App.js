import React, { Component } from 'react';
import './App.css';
import StatusChart from "./StatusChart"
import StateChangesChart from "./StateChangesChart"
import EventsFrequencyChart from "./EventsFrequencyChart"
import bigFatData from "./test_data.json"
import moment from "moment"

let statusData = bigFatData.map( (robot) => {
  return {
    date: robot.date,
    running: robot.log.stateHours.running,
    paused: robot.log.stateHours.paused,
    manual: robot.log.stateHours.manual,
    idling: robot.log.stateHours.idling,
    estopped: robot.log.stateHours.estopped,
  }
});

let today = moment("2019-02-08").startOf('day')

//This may be dog shit - I can't tell. Wooooooo drunk lippy codes the bestest
let stateChanges = bigFatData[0].stateChanges[0].states.map( (stateChange) => {
  return {
    date: moment(new Date(stateChange.date)).unix(),
    event: stateChange.event
  }
});

// console.log(stateChanges)

let eventFrequency = bigFatData[0].eventFreq.map( (frequeydequey, index) => {
  return {
    index: index,
    count: frequeydequey.count,
    message: frequeydequey.eventMessage,
  }
})
//Lippy also didn't do the sort function is his data well......whoopsie
.sort( (a, b) => {
  if (a.count > b.count) { return -1; }
  else if (a.count < b.count) { return 1; }
  else { return 0; }
});

console.log(eventFrequency)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="lhsPanel">
            <div className='robotSelectionPanel'>
              Indigo
            </div>
          </div>
          <div className="rhsPanel">
            <StatusChart statusData={statusData}/>
            <StateChangesChart stateChanges={stateChanges}/>
            <EventsFrequencyChart eventFrequency={eventFrequency}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
