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
                list_items: ["Line 3: Importing useState and useEffect from react in order to use a hooks", "Line 7: Declaring our state of Dreams and giving it a value of [] in the useState function. We also give ourselves a method for changing dreams", "Lines 9-13: UseEffect allows us to populate our state of dreams from our db.json", "Ultimately what we're going to do is render all of the dreams we are currently in to the screen", "For our next trick, we're going to make a method that let's us rideTheKick back up a level of dreaming. This will remove one of our dreams from the sequence", "Feel free to take a 162 minute break to watch Inception so you understand all the references. It's not important that you do, except that it is", "We'll collapse our handleClick function on lines 15-25 for the next step"],
                images: ["https://i.imgur.com/eGUof6v.png"]
            },
            {
                name: "create method",
                list_items: ["Lines 28-33: rideTheKick takes in an argument and compares that argument to the state of dreams.", "Using .filter allows us to take out the dream we'd like to get kicked out of and saves the rest", "None of this is persistant", "If want persistance you should collab with me!"],
                images: ["https://i.imgur.com/3JGuUNz.png"]
            },
            {
                name: "create components",
                list_items: ["The barebones of these components are all the same", "Let's connect them up and then add some functionality to them by passing down state and our method", "Do we really NEED to have the WithinADream Componenet? For the purposes of making this app come full circle on the Inception thing, yes we do. For the purposes of creating clean code, we absolutely do not."],
                images: ["https://i.imgur.com/jzSnKmW.png", "https://i.imgur.com/RgR4dre.png", "https://i.imgur.com/xrCBOnD.png"]
            },
            {
                name: "connect components",
                list_items: ["Every parent imports only one child because that child has imported their child and so on and so forth", "The import is a darker blue because it has not been called yet", "We need to call them in order to pass down state, props, and our method"], 
                images: ["https://i.imgur.com/TCGQmCN.png", "https://i.imgur.com/ZBDTqUE.png", "https://i.imgur.com/PslXTeo.png", "https://i.imgur.com/DTlM7xE.png"]
            },
            {
                name: "pass down state and method",
                list_items: ["App.js Line 52: We call the Dream component and pass the state of dreams and the method of rideTheKick into it", "Dream.js Line 4: The function dream accepts those props as an argument", "Dream.js Line 7: We call the WithinADream component and pass the state of dreams and the method of rideTheKick into using dot notation", "WitinADream.js Line 4: The function dream accepts those props as an argument", "WithinADream.js Lines 6-10: We call the DreamCard Component for every dream object inside the dream state. We do this by using the .map function that can be called on any array. Semantically, it reads: for every dream return a dream card. We can pass down the nested information in the dreams array this way to DreamCard", "WithinADream.js Line 14: We call renderDreamCards and invoke it because we want that to happen immediately", "We now have our four dreams rendering to the screen and they can be removed by cliking Ride The Kick"],
                images: ["https://i.imgur.com/arqybm3.png", "https://i.imgur.com/nWcNGyx.png", "https://i.imgur.com/1S4GjpN.png", "https://i.imgur.com/dyVMs7j.png"]
            },
            {
                name: "start over"
            }
        ],
        count: 1
    }

    increaseCount = () => {
        if (this.state.count <= 5) {
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
