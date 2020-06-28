import React from "react";

import {
  createStyles,
  makeStyles,
  Theme,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";

import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { newMaterial } from "../actions/materialDefinitionActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    iconButton: {
      marginRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
    },
  })
);

export default function AddMaterial() {
  const [name, setName] = React.useState<null | string>(null);

  const [type, setType] = React.useState<null | string>(null);

  const [status, setStatus] = React.useState<null | string>("available");

  const [stock, setStock] = React.useState<null | number>(null);

  const [uom, setUom] = React.useState<null | string>(null);

  const [price, setPrice] = React.useState<null | number>(null);

  const [deliveryDate, setDeliveryDate] = React.useState<null | string>(null);

  const [barcode, setBarcode] = React.useState<null | string>(null);

  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography variant="h5">Create Inventory</Typography>
      </div>
      <div>
        <TextField
          required
          id="name"
          label="Material Name"
          defaultValue=""
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="type"
          label="Material Type"
          defaultValue=""
          variant="outlined"
          onChange={(event) => setType(event.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="status"
          label="Material Status"
          defaultValue="available"
          variant="outlined"
          onChange={(event) => setStatus(event.target.value)}
        />
      </div>
      <div>
        <TextField
          id="stock"
          label="Stock"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(event) => setStock(Number(event.target.value))}
        />
      </div>
      <div>
        <TextField
          required
          id="uom"
          label="Unit of Measure"
          defaultValue=""
          variant="outlined"
          onChange={(event) => setUom(event.target.value)}
        />
      </div>
      <div>
        <TextField
          id="price"
          label="Price in EUR"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(event) => setPrice(Number(event.target.value))}
        />
      </div>
      <div>
        <TextField
          required
          id="date"
          label="Delivery Date"
          type="date"
          defaultValue=""
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => setDeliveryDate(event.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="barcode"
          label="Barcode"
          defaultValue=""
          variant="outlined"
          onChange={(event) => setBarcode(event.target.value)}
        />
      </div>
      <div>
        <Link to="/inventory">
          <IconButton
            onClick={() =>
              dispatch(
                newMaterial(
                  name,
                  type,
                  status,
                  stock,
                  uom,
                  price,
                  deliveryDate,
                  barcode
                )
              )
            }
            size="small"
            className={classes.iconButton}
          >
            <SaveIcon color="action" fontSize="default" />
          </IconButton>
        </Link>
        <Link to="/inventory">
          <IconButton size="small" className={classes.iconButton}>
            <CancelIcon color="action" fontSize="default" />
          </IconButton>
        </Link>
      </div>
    </form>
  );
}
