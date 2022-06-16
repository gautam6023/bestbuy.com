import React from "react";
import { ProductPageContainer } from "./Product.styled";
import { withStyles } from "@material-ui/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = [
  {
    title: "Computers & Tablets (207)",
    link: "#",
  },
  {
    title: "Appliances (180)",
    link: "#",
  },
  {
    title: "Home Living (164)",
    link: "#",
  },
  {
    title: "Audio (123)",
    link: "#",
  },
  {
    title: "Wearable Technology (103)",
    link: "#",
  },
  {
    title: "Smart Home (61)",
    link: "#",
  },
  {
    title: "Cameras & Camcorders (55)",
    link: "#",
  },
  {
    title: "Best Buy Mobile (38)",
    link: "#",
  },
  {
    title: "Health & Fitness (30)",
    link: "#",
  },
  {
    title: "Musical Instruments & Equipment (29)",
    link: "#",
  },
  {
    title: "Equipment (29)",
    link: "#",
  },
  {
    title: "Toys, Drones & Education (16)",
    link: "#",
  },
  {
    title: "Baby & Maternity (9)",
    link: "#",
  },
  {
    title: "Car Electronics and GPS (7))",
    link: "#",
  },
  {
    title: "Personal Care (6)",
    link: "#",
  },
  {
    title: "Travel, Luggage & Bags (5)",
    link: "#",
  },
];

const brands = [
  "APPLE",
  "SAMSUNG",
  "ASUS",
  "HP",
  "ACER",
  "LG",
  "SONY",
  "DELL",
  "INSIGNIA",
  "NINTENDO",
  "MICROSOFT",
  "DYSON",
  "GOOGLE",
  "CANON",
  "LOGITECH",
];

const ProductPage = () => {
  return (
    <ProductPageContainer>
      <p className="titleOfComp">Product Page</p>
      <div className="container">
        <div className="sideBarOptions">
          {/* Categories Accordian */}
          <Accordion disableGutters={true}>
            <AccordionSummary
              className="categories"
              id="panel1-header"
              aria-aria-controls="pane1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              Categories
            </AccordionSummary>
            <AccordionDetails>
              {categories.map((el, i) => {
                return (
                  <Typography key={i} className="options">
                    <a href={el.link} style={{ textDecoration: "none" }}>
                      {el.title}
                    </a>
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
          {/* Availibility */}
          <Accordion disableGutters={true}>
            <AccordionSummary
              id="panel2-header"
              aria-aria-controls="pane2-content"
              expandIcon={<ExpandMoreIcon />}
            >
              Availability
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                <Checkbox />
                <span>Get it Shipped</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>Pick Up at Nearby Store</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Offers */}
          <Accordion disableGutters={true}>
            <AccordionSummary
              id="panel3-header"
              aria-aria-controls="pane3-content"
              expandIcon={<ExpandMoreIcon />}
            >
              Currant Offers
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                <Checkbox />
                <span>On Sale</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>Top Deals</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>On Clearence</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>Best Buy Exclusive</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>Refurbished</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>Open Box</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>Online Only</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Price */}
          <Accordion disableGutters={true}>
            <AccordionSummary
              id="panel4-header"
              aria-aria-controls="pane4-content"
              expandIcon={<ExpandMoreIcon />}
            >
              Price
            </AccordionSummary>

            <AccordionDetails>
              <form action="">
                <div className="priceContainer">
                  <div>
                    <label>Min</label>
                    <input type="number" placeholder="$" />
                  </div>

                  <div>
                    <label>Max</label>
                    <input type="number" placeholder="$" />
                  </div>
                </div>
                <button type="submit" className="submitPriceFilter">
                  Apply Price Change
                </button>
              </form>
            </AccordionDetails>
          </Accordion>
          {/* Discount */}
          <Accordion disableGutters={true}>
            <AccordionSummary
              id="panel5-header"
              aria-aria-controls="pane5-content"
              expandIcon={<ExpandMoreIcon />}
            >
              Discount
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                <Checkbox />
                <span>60% off or More</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>50% off or More</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>40% off or More</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>30% off or More</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>20% off or More</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>All Discounted Items</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Brands */}
          <Accordion disableGutters={true}>
            <AccordionSummary
              id="panel6-header"
              aria-aria-controls="pane6-content"
              expandIcon={<ExpandMoreIcon />}
            >
              Brands
            </AccordionSummary>
            {brands.map((el, i) => {
              return (
                <Typography key={i}>
                  <Checkbox />
                  <span>{el}</span>
                </Typography>
              );
            })}
            <AccordionDetails></AccordionDetails>
          </Accordion>
          {/* Ratings */}
          <Accordion disableGutters={true}>
            <AccordionSummary
              id="panel5-header"
              aria-aria-controls="pane5-content"
              expandIcon={<ExpandMoreIcon />}
            >
              Coustomer Rating
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                <Checkbox />
                <span>5</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>4</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>3</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>2</span>
              </Typography>
              <Typography>
                <Checkbox />
                <span>1</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="products"></div>
      </div>
    </ProductPageContainer>
  );
};

export default ProductPage;
