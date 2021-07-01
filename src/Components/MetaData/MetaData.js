import React, { Component } from 'react'
import CodeSnapshots from "./CodeSnapshots"
import Buttons from "./Buttons"
import WhatsUp from "./WhatsUp"

export default class MetaData extends Component {
    state = {
        progression: [
            {
                name: "initial",
                list_items: ["Lines 1-2: Importing the styling and the MetaData. The MetaData is linking this column's information to the page. You can check it all out on github if you'd like but otherwise, don't worry about this", "Line 4: Declares this return as the default export", "Lines 6-16: Creates the fixed bar on the right side that let's you access the db.json", "Lines 18-43: Wraps up this whole page's html in a single div that's rendered to the index.js"],
                images: ["https://i.imgur.com/5SGoaEf.png"]
            },
            {
                name: "import state",
                list_items: ["Line 3: Importing useState and useEffect from react in order to use a hooks", "Line 7: Declaring our state of Dreams and giving it a value of [] in the useState function. We also give ourselves a method for changing dreams", "Lines 9-13: UseEffect allows us to populate our state of dreams from our db.json", "Ultimately what we're going to do is render all of the dreams we are currently in to the screen", "For our next trick, we're going to make a method that let's us rideTheKick back up a level of dreaming. This will remove one of our dreams from the sequence", "Feel free to take a 162 minute break to watch Inception so you understand all the references. It's not important that you do, except that it is."],
                images: ["https://i.imgur.com/qU4xydO.png"]
            },
            {
                name: "create method",
                list_items: ["seven", "eight", "nine"],
                images: ["one", "two", "three"]
            },
            {
                name: "create components",
                list_items: ["one", "two", "three"],
                images: []
            },
            {
                name: "connect components",
                list_items: ["one", "two", "three"],
                images: []
            },
            {
                name: "pass down state",
                list_items: ["one", "two", "three"],
                images: []
            },
            {
                name: "pass down method",
                list_items: ["one", "two", "three"],
                images: []
            }
        ],
        count: 1
    }

    increaseCount = () => {
        if (this.state.count < 6) {
            this.setState({count: this.state.count + 1})
        } else {
            this.setState({count: 1})
        }
    }

    render() {
        return (
            <div>
                <WhatsUp 
                    count={this.state.count} 
                    increaseCount={this.increaseCount} 
                    progression={this.state.progression}/>
                <Buttons 
                    count={this.state.count}
                    increaseCount={this.increaseCount} 
                    progression={this.state.progression}/>
                <CodeSnapshots
                    count={this.state.count}
                    increaseCount={this.increaseCount} 
                    progression={this.state.progression}/>
            </div>
        )
    }
}
