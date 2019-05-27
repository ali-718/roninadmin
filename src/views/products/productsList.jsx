import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import avatar from "assets/img/faces/marc.jpg";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Link, Redirect,Route } from "react-router-dom";

import "../../assets/css/dashboard.css";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class ProductsList extends Component {
  state = {
    chargers: typeof this.props.location.data == "undefined" ? [] : this.props.location.data[0] 
  };
  render() {
    const chargerList = this.state.chargers.map(list => (
      <Link to="">
        <a className="areaCardBody">
          <div className="areaCardImage">
            <img src={list.avatar} alt="..." class="avatar" />
          </div>
          <div className="areaCardText">
            <h3 style={{ color: "#60B664" }}>{list.name}</h3>
          </div>
        </a>
      </Link>
    ));
    return (
      <GridItem xs={12} sm={12} md={12}>
        <Card xs={12} sm={12} md={12}>
          <CardHeader color="success" className="areaHeader">
            <p className="areaHeaderText">{ typeof this.props.location.data == "undefined" ? "Undefined" : this.props.location.data[1]}</p>
            <div style={{ flex: 1 }} />
            <a href="" onClick={e => e.preventDefault()}>
              <i class="material-icons addIcon">add_circle_outline</i>
            </a>
          </CardHeader>
          <CardBody className="productsPage">
            {this.state.chargers.length == 0 ? 
          <Redirect from="/admin/products/items" to={this.props.history.goBack()} />: chargerList
            }
          </CardBody>
        </Card>
      </GridItem>
    );
  }
}

export default withStyles(styles)(ProductsList);
