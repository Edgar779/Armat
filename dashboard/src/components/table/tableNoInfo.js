import { TableCell, TableRow } from "@mui/material";

export const TableNoInfo = ({ text }) => {
  return (
    <TableRow className="no-info-wrapper">
      <TableCell className="no-info-text">{text}</TableCell>
    </TableRow>
  );
};
