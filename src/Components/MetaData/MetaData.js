import React, { Component } from 'react'
import CodeSnapshots from "./CodeSnapshots"
import Buttons from "./Buttons"
import WhatsUp from "./WhatsUp"

export default class MetaData extends Component {
    state = {
        progression: [
            {
                name: "initial",
                list_items: ["Lines 1-2: Importing the styling and the MetaData. The MetaData is linking the helping informtion (like this) to the page. You can check it all out on github if you'd like but otherwise, don't worry about this", "Line 4: Declares this return as the default export", "Lines 6-16: Creates the fixed bar on the right side that let's you access the db.json", "Lines 18-43: Wraps up this whole page's html in a single div that's rendered to the index.js"],
                images: ["https://i.imgur.com/5SGoaEf.png"]
            },
            {
                name: "import state",
                list_items: ["four", "five", "six"],
                images: []
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
