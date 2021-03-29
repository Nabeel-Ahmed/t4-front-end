import React, { useState } from "react";
import { useHistory } from "react-router-dom"

// Components
import Card from "@material-ui/core/Card";
import { CardContent, Typography, Button, Modal} from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
// import Card from '@material-ui/core/Card';

// Styles
import "./DetailedNeedView.css";

// Components

function ItemCard(props) {
  const [value, setValue] = useState(0);

  const handleMinus = () => {
    if (value < 1) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <>
      <Card className={"itemCard"}>
        <CardContent className={"cardContent"}>
          <div className={"quantity"}>
            <Typography variant="h2">{props.quantity}</Typography>
          </div>
          <div className={"item"}>
            <Typography variant="h4">{props.item}</Typography>
          </div>
          <div className={"days"}>
            <Typography variant="h4">
              <div className={"div-pos"}>{props.days}</div>
            </Typography>
          </div>
          <div className={"counter-button"}>
            <Button variant="contained" color="primary" onClick={handleMinus}>
              -
            </Button>
          </div>
          <div className={"counter-value"}>
            <Typography variant="h2">{value}</Typography>
          </div>
          <div className={"counter-button"}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setValue(value + 1)}
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

const columns = [
    { field: "id", headerName: "quantity", width: 150 },
    { field: "firstName", headerName: "Item", width: 130 },
    { field: "lastName", headerName: "Urgency", width: 130 },
    {
      field: "pledged",
      headerName: "Pledged",
      type: "number",
      width: 150
    }
  ];

  const rows = [
    { id: 7, lastName: "1-3 days", firstName: "Shampoo", pledged: 5 },
    { id: 3, lastName: "1-3 days", firstName: "Shoes", pledged: 3 },
    { id: 19, lastName: "1-3 days", firstName: "Diapers", pledged: 18 },
  ];


function Body() {
    const history = useHistory();
    
    const handleClick = () => {
        history.push("/confirmed");
    }

    return ( 
    <div className={"modal-style"}>
        <div className={"summary-recipt"}>
            <Typography variant="h4"> Summary Receipt</Typography>
            <div style={{ height: 270, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
            <Button variant="outlined" onClick={handleClick}> Confirm</Button>
        </div>
    </div>
    )
};

export default function DetailedNeedView() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={"detail-container"}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Body/>
      </Modal>

      <div></div>
      <Typography variant="h3"> Centre Point Camden Needs... </Typography>

      <div className={"quantity-text"}>
        <Typography variant="H6"> Quantity </Typography>
      </div>
      <div className={"item-text"}>
        <Typography variant="H6"> Items Needed </Typography>
      </div>
      <Typography variant="H6"> Urgency </Typography>
      <Typography variant="H6"> Your Pledge </Typography>
      <div className={"needs-container"}>
        <ItemCard quantity={7} item={"Shampoo"} days={"1-3 Days"} />
        <ItemCard quantity={3} item={"Shoes"} days={"1-3 Days"} />
        <ItemCard quantity={19} item={"Diapers"} days={"1-3 Days"} />
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          {" "}
          Continue{" "}
        </Button>
      </div>
      <div className={"right-panel"}>
        <div className={"char-name"}>
          <Typography variant="h4"> Centrepoint, Camden </Typography>
        </div>
        <div className={"char-logo"}>{/* <img/> */}</div>
        <div className={"char-text"}>
          <Typography variant="h5">Why we need your Help?</Typography>
          <Typography variant="body1">
            Hundreds of young people in Camden will become care leavers. We need
            your help to help give basic necessaties for when they move homes.
          </Typography>
        </div>

        <div className={"char-text"}>
          <Typography variant="h5">how to get this item to us?</Typography>
          <Typography variant="body1">
            Drop off location : 103 New Oxford St, West End, London WC1A 1DB
          </Typography>
        </div>

        <div className={"char-text"}>
          <Typography variant="h5">We are open:</Typography>
          <Typography variant="body1">Mon-Fri 9AM - 7PM</Typography>
          <Typography variant="body1">Sat-Sun 8AM - 11PM</Typography>
        </div>
        <div className={"char-text"}>
          <Typography variant="h5">Contact Number</Typography>
          <Typography variant="body1">0208 975 2900</Typography>
        </div>
        <div className={"but-pos"}>
          <Button variant="outlined"> visit website</Button>
        </div>
      </div>
    </div>
  );
}
