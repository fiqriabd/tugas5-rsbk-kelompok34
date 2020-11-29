import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class Chucknorris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Chucknorris: [],
      visible: false,
    };
  }

  handleButton = (joke) => {
      alert(joke);
  };
  handleModal = () => {
      this.setState({
        visible: true,
      });
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://api.icndb.com/jokes",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
           Chucknorris: data.value,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="boxWhite">
          <center>
            <h1>Jokes Chuck Norris</h1>
          </center>
          <Modal
            title="JOKES CHUCK NORRIS"
            centered
            visible={this.state.visible}
            onOk={() => this.setState({ visible: false})}
            onCancel={() => this.setState({ visible: false})}
            width={500}
          >
             <div style={{textAlign: "center"}}>
                <p> janccoo</p>
             </div>
            </Modal>
              {this.state.Chucknorris.map((results, index) =>{
                return (
                  <div className="card" key={results.id}>
                    <p>{results.joke}</p>
                </div>
                );
            })}
        );
        </div>
        </div>
        );
    }
}