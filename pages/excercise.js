import React, { Component } from 'react';

class excercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longname: "",
        }

    }
    componentDidMount() {
        console.log(this.longword("i like my babys"));
    }
    longword = (str) => {
        let words = str.split(" ");
        let longestword = "";
        for (let word of words) {
            if (word.length > longestword.length) {
                longestword = word;
            }
        }
        return longestword;
    }

    render() {
        return (
            <div>
                {this.longword()}
            </div>
        );
    }
}

export default excercise;