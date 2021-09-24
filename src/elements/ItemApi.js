import React from "react";
import axios from "axios";

export default class ItemApi extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://jualinnerrajutmurah.com/api/v1/portofolios/index`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        console.log(res);
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>{person}</li>
        ))}
      </ul>
    );
  }
}
