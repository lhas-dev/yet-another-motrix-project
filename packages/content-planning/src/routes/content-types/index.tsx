import {
  Box,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ContentTypes = () => {
  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Tipos de Conteúdo</Typography>
        <Button component={Link} to="add">
          Adicionar Novo
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
};

export default ContentTypes;
