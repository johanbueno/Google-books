import React from "react";
import Row from "../Row";
import Col from "../Col";
import Wrapper from "../Wrapper"
import "./style.css";
class Bookdetail extends React.Component {
  render() {
    return (

      <Wrapper>
      <Col size="md-12">
        <Row className="display">
          <Col  size="md-2">
            <img src={this.props.src} alt={this.props.title}></img>
          </Col>
          <Col  size="md-2"> {this.props.title}</Col>
          <Col  size="md-2"> {this.props.authors}</Col>
          <Col  size="md-2">{this.props.description}</Col>
          <Row>
          <Col  size="md-10">{this.props.info} </Col>
          </Row>
          
        </Row>

      </Col>

      </Wrapper>
    );

  }

}

export default Bookdetail;