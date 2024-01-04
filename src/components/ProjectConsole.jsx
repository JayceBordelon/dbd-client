import React, { useEffect, useState } from 'react'
import { SiMongodb, SiFirebase, SiGraphql, SiRedis } from "react-icons/si";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { sendRequest } from '../helpers/apiHelper';

const IconSize = `${(50)}%`;

// Icons
export const MONGO = <SiMongodb color="#55AD48" size={IconSize} />;
export const FIREBASE = <SiFirebase color="#FBC040" size={IconSize} />;
export const GRAPHQL = <SiGraphql color="#E535AB" size={IconSize} />;
export const REDIS = <SiRedis color="#C73732" size={IconSize} />;

const sample = [
  [<h2>Normalized</h2>, MONGO, <button className="cool-button">Edit</button>, <button className="cool-button">Delete</button>],
  [<h2>Sad</h2>, REDIS, <button className="cool-button">Edit</button>, <button className="cool-button">Delete</button>],
  [<h2>Happy</h2>, FIREBASE, <button className="cool-button">Edit</button>, <button className="cool-button">Delete</button>],
  [<h2>Broken</h2>, FIREBASE, <button className="cool-button">Edit</button>, <button className="cool-button">Delete</button>],
  [<h2>Depressed</h2>, GRAPHQL, <button className="cool-button">Edit</button>, <button className="cool-button">Delete</button>],
];

function createData(id, design, type, edit, remove) {
  return { id, design, type, edit, remove};
}

const columns = [
  {
    width: 30,
    label: <h1>Design Name</h1>,
    dataKey: 'design',
  },
  {
    width: 50,
    label: <h1>Type</h1>,
    dataKey: 'type',
  },
  {
    width: 30,
    label: <h1>Edit</h1>,
    dataKey: 'edit',
  },
  {
    width: 30,
    label: <h1>Delete</h1>,
    dataKey: 'remove',
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}


export default function ProjectConsole() {


  return( <>
    <h1>Your Designs</h1>
    <Paper style={{ minWidth: 1200, height: 700}}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
    <button className="cool-button">Add a new Design</button>
  </>);
  
}
