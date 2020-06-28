import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Toolbar,
  TableFooter,
  IconButton,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { deleteMaterial } from "../actions/materialDefinitionActions";

import { selectRow } from "../actions/selectedRowActions";

export default function Inventory() {
  interface RootState {
    materialDefinition: Data[];
    selectedRow: any;
  }

  const [selectedID, setSelectedID] = React.useState<null | number>(null);

  const material = (state: RootState) => state.materialDefinition;
  const materialdefinition = useSelector(material);

  const bool = (state: RootState) => state.selectedRow;
  const selectedRow = useSelector(bool);

  const classes = useStyles();

  const dispatch = useDispatch();

  function rowEvent(id: number) {
    dispatch(selectRow(id));
    setSelectedID(id);
  }

  return (
    <div className={classes.root}>
      <div className={classes.tableInfo}>
        <Typography variant="h5">Inventory</Typography>
      </div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader aria-label="material definition table">
          <TableHead className={classes.tableHeader}>
            {columns.map((column) => (
              <TableCell align="left">{column.label}</TableCell>
            ))}
          </TableHead>

          <TableBody>
            {materialdefinition.map((row) => (
              <TableRow
                selected={selectedID === row.id}
                key={row.id}
                onClick={() => rowEvent(row.id)}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.materialName}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.stock}</TableCell>
                <TableCell align="left">{row.checkedIn}</TableCell>
                <TableCell align="left">{row.checkedOut}</TableCell>
                <TableCell align="left">{row.uom}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.deliveryDate}</TableCell>
                <TableCell align="left">{row.barcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className={classes.bottomBar}>
            <Toolbar>
              <Link to="/addMaterial">
                <IconButton size="small" className={classes.iconButton}>
                  <AddIcon color="action" fontSize="default" />
                </IconButton>
              </Link>
              <IconButton size="small" className={classes.iconButton}>
                <EditIcon color="action" fontSize="default" />
              </IconButton>
              {selectedRow.bool ? (
                <IconButton
                  onClick={() => dispatch(deleteMaterial(selectedRow.id))}
                  size="small"
                  className={classes.iconButton}
                >
                  <DeleteIcon color="action" fontSize="default" />
                </IconButton>
              ) : null}
              {selectedRow.bool ? (
              <IconButton size="small" className={classes.iconButton}>
                <CloudDownloadIcon color="action" fontSize="default" />
              </IconButton>
              ) : null}
              {selectedRow.bool ? (
              <IconButton size="small" className={classes.iconButton}>
                <CloudUploadIcon color="action" fontSize="default" />
              </IconButton>
              ) : null}
            </Toolbar>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

interface Column {
  id:
    | "id"
    | "materialName"
    | "type"
    | "status"
    | "stock"
    | "checkedIn"
    | "checkedOut"
    | "uom"
    | "price"
    | "deliveryDate"
    | "barcode";
  label: string;
}

const columns: Column[] = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "materialName",
    label: "Material Name",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "stock",
    label: "Stock",
  },
  {
    id: "checkedIn",
    label: "Checked In",
  },
  {
    id: "checkedOut",
    label: "Checked Out",
  },
  {
    id: "uom",
    label: "Unit of Measure",
  },
  {
    id: "price",
    label: "Price",
  },
  {
    id: "deliveryDate",
    label: "Delivery Date",
  },
  {
    id: "barcode",
    label: "Barcode",
  },
];

// if required the implementation needs to be extended by lots
// TODO material type should be maintained an own entity --> dropdown list for type object, not a string (as current implementation)

interface Data {
  id: number;
  materialName: string;
  type: string;
  status: string;
  stock: number;
  checkedIn: number;
  checkedOut: number;
  uom: string;
  price: number;
  deliveryDate: string;
  barcode: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "80%",
    height: "87%",
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(20),
  },
  tableContainer: {
    width: "100%",
    maxHeight: "89%",
    borderRadius: 0,
  },
  tableInfo: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(5),
  },
  tableHeader: {
    backgroundColor: "FFF",
  },
  iconButton: {
    marginRight: theme.spacing(4),
  },
  bottomBar: {
   width: '97.7%',
   height: '7%',
   position: 'absolute',
   bottom: -45,
   backgroundColor: "FFFFFF",
   borderBottomLeftRadius: theme.shape.borderRadius,
   borderBottomRightRadius: theme.shape.borderRadius,
  },
}));
