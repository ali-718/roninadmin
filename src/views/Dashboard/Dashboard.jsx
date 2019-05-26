import React from "react";
import PropTypes from "prop-types";
import avatar from "assets/img/faces/marc.jpg";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
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

import "../../assets/css/dashboard.css";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    anchorEl: null,
    products: [
      {
        name: "Chargers",
        avatar: avatar,
        link: "products/items",
        data: [
          { name: "Samsung Charger", avatar: avatar },
          { name: "Apple Charger", avatar: avatar }
        ]
      },
      {
        name: "Mobiles",
        avatar: avatar,
        link: "products/items",
        data: [
          { name: "Samsung Galaxy S8", avatar: avatar },
          { name: "Apple Iphone X", avatar: avatar }
        ]
      },
      {
        name: "Computers",
        avatar: avatar,
        link: "products/items",
        data: [
          { name: "HP Pavillion X360", avatar: avatar },
          { name: "Apple Macbook Pro", avatar: avatar }
        ]
      },
      {
        name: "Laptops",
        avatar: avatar,
        link: "products/items",
        data: [
          { name: "Acer Predator", avatar: avatar },
          { name: "Dell Alienware", avatar: avatar }
        ]
      },
      {
        name: "Watches",
        avatar: avatar,
        link: "products/items",
        data: [
          { name: "Titan", avatar: avatar },
          { name: "Rolex", avatar: avatar }
        ]
      },
      {
        name: "Dispensers",
        avatar: avatar,
        link: "products/items",
        data: [
          { name: "Hitachi Water Dispenser", avatar: avatar },
          { name: "Toshiba Water Dispenser", avatar: avatar }
        ]
      }
    ]
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const productsList = this.state.products.map(products => (
      <Link
        className="areaCardBody"
        to={{ pathname: products.link, data: [products.data, products.name] }}
      >
        <div className="areaCardImage">
          <img src={products.avatar} alt="..." class="avatar" />
        </div>
        <div className="areaCardText">
          <h3>{products.name}</h3>
        </div>
      </Link>
    ));
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            {/* <a href="/pablo" onClick={e => e.preventDefault()}> */}
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>All Orders</p>
                <h3 className={classes.cardTitle}>25</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <i class="material-icons">pageview</i>
                  <a href="http://localhost:3000/admin/user">View</a>
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
                  <a href="http://localhost:3000/admin/user">View</a>
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
                  <a href="http://localhost:3000/admin/user">View</a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          {/* Area Management */}
          <GridItem xs={12} sm={12} md={12}>
            <Card xs={12} sm={12} md={12}>
              <CardHeader color="primary" className="areaHeader">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="area"
                >
                  <p className="areaHeaderText">Area Management</p>
                </Link>
                <div style={{ flex: 1 }} />
                <a href="#" onClick={e => e.preventDefault()}>
                  <i class="material-icons addIcon">add_circle_outline</i>
                </a>
              </CardHeader>
              <CardBody className="areaScroll">
                <a className="areaCardBody" href="#pas">
                  <div className="areaCardImage">
                    <img
                      src={avatar}
                      alt="..."
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="areaCardText">
                    <h3>Saddar</h3>
                  </div>
                </a>
                <a className="areaCardBody" href="#pas">
                  <div className="areaCardImage">
                    <img
                      src={avatar}
                      alt="..."
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="areaCardText">
                    <h3>Hadeed</h3>
                  </div>
                </a>
                <a className="areaCardBody" href="#pas">
                  <div className="areaCardImage">
                    <img
                      src={avatar}
                      alt="..."
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="areaCardText">
                    <h3>Malir</h3>
                  </div>
                </a>
                <a className="areaCardBody" href="#pas">
                  <div className="areaCardImage">
                    <img
                      src={avatar}
                      alt="..."
                      style={{ width: 100, height: 100 }}
                    />
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
              <CardHeader color="warning" className="areaHeader">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="products"
                >
                  <p className="areaHeaderText">Products</p>
                </Link>
                <div style={{ flex: 1 }} />
                <a href="#" onClick={e => e.preventDefault()}>
                  <i class="material-icons addIcon">add_circle_outline</i>
                </a>
              </CardHeader>
              <CardBody className="productsScroll">
                {this.state.products.length == 0 ? (
                  <div className="areaCardText">
                    <h3>There is nothing to show</h3>
                  </div>
                ) : (
                  productsList
                )}
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
