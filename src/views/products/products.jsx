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

import "../../assets/css/dashboard.css";
import { Link } from "react-router-dom";

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

class Products extends React.Component {
  state = {
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
  render() {
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
      <GridItem xs={12} sm={12} md={12}>
        <Card xs={12} sm={12} md={12}>
          <CardHeader color="warning" className="areaHeader">
            <p className="areaHeaderText">Category Management</p>
            <div style={{ flex: 1 }} />
            <a href="#" onClick={e => e.preventDefault()}>
              <i class="material-icons addIcon">add_circle_outline</i>
            </a>
          </CardHeader>
          <CardBody className="productsPage">
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
    );
  }
}

export default withStyles(styles)(Products);
