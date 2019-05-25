import React from "react";
import PropTypes from "prop-types";
import avatar from "assets/img/faces/marc.jpg";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";


import '../../assets/css/dashboard.css';
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            {/* <a href="/pablo" onClick={e => e.preventDefault()}> */}
            <Card>
              <CardHeader  color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>All Orders</p>
                <h3 className={classes.cardTitle}>25</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <i class="material-icons">pageview</i>
                  <a href="http://localhost:3000/admin/user">
                    View
                  </a>
                </div>
              </CardFooter>
            </Card>
            {/* </a> */}
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Completed Orders</p>
                <h3 className={classes.cardTitle}>18</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <i class="material-icons">pageview</i>
                  <a href="http://localhost:3000/admin/user">
                    View
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Cancelled Orders</p>
                <h3 className={classes.cardTitle}>7</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <i class="material-icons">pageview</i>
                  <a href="http://localhost:3000/admin/user">
                    View
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          {/* Area Management */}
          <GridItem xs={12} sm={12} md={12}>
          <Card xs={12} sm={12} md={12}>
            <CardHeader color="primary">
              <h3 className={classes.cardTitleWhite}>Area Management</h3>
            </CardHeader>
            <CardBody >
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Saddar</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Hadeed</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Malir</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Gulshan</h3>
                </div>
              </a>
            </CardBody>
            </Card>
          </GridItem>

            {/* Products Management */}
            <GridItem xs={12} sm={12} md={12}>
          <Card xs={12} sm={12} md={12}>
            <CardHeader color="warning">
              <h3 className={classes.cardTitleWhite}>Products</h3>
            </CardHeader>
            <CardBody className="productsScroll">
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Charger</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Data cable</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Mobiles</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Laptops</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Camera</h3>
                </div>
              </a>
              <a className="areaCardBody" href="#pas">
                <div className="areaCardImage">
                 <img src={avatar} alt="..." style={{width:100,height:100}} />
                </div>
                <div className="areaCardText">
                  <h3>Dispenser</h3>
                </div>
              </a>
            </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
