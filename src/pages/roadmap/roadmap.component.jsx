import React, { Component } from "react";
import classes from "./roadmap.module.scss";

//constants
import {TRELLO_CONSTANTS} from './constants.js'


//components
import Section from "./components/section/section.component";

export default class Roadmap extends Component {
  constructor() {
    super();
    this.state = { sections: [], isLoading: true, errorState:false };
  }
  componentDidMount() {
    fetch(TRELLO_CONSTANTS.GET_LISTS_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ sections: data, isLoading: false });
      })
      .catch((err) => {
        this.setState({errorState:true})
        console.log(err);
      });
  }

  sectionComponentList() {
    const list =[];
    this.state.sections.forEach(element => {
      list.push(<Section title={element.name} key={element.id} id={element.id}/>)
    });
    return list;
  }

  render() {
    // console.log(this.sectionComponentList());
    const sections = this.sectionComponentList();
    if(this.state.isLoading) return <div>Se incarcă ...</div>
    return (
      <div className={classes.roadmap_component}>
        {sections}
      </div>
    );
  }
}
