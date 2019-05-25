import React from "react";
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

function Area(props) {
  const { classes } = props;
  return (
    <GridItem xs={12} sm={12} md={12}>
      <Card xs={12} sm={12} md={12}>
        <CardHeader color="primary" className="areaHeader">
          <p className="areaHeaderText">Areas</p>
          <div style={{ flex: 1 }} />
          <a href="#" onClick={e => e.preventDefault()}>
            <i class="material-icons addIcon">add_circle_outline</i>
          </a>
        </CardHeader>
        <CardBody>
          <a className="areaCardBody" href="#pas">
            <div className="areaCardImage">
              <img src={avatar} alt="..." style={{ width: 100, height: 100 }} />
            </div>
            <div className="areaCardText">
              <h3>Saddar</h3>
            </div>
          </a>
          <a className="areaCardBody" href="#pas">
            <div className="areaCardImage">
              <img src={avatar} alt="..." style={{ width: 100, height: 100 }} />
            </div>
            <div className="areaCardText">
              <h3>Hadeed</h3>
            </div>
          </a>
          <a className="areaCardBody" href="#pas">
            <div className="areaCardImage">
              <img src={avatar} alt="..." style={{ width: 100, height: 100 }} />
            </div>
            <div className="areaCardText">
              <h3>Malir</h3>
            </div>
          </a>
          <a className="areaCardBody" href="#pas">
            <div className="areaCardImage">
              <img src={avatar} alt="..." style={{ width: 100, height: 100 }} />
            </div>
            <div className="areaCardText">
              <h3>Gulshan</h3>
            </div>
          </a>
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default withStyles(styles)(Area);
