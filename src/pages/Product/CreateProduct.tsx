// CREATED BY: ANSARI KAMAL

import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Container
} from "@mui/material";


// Table Rows Properties.
const columns = [
    { id:"id", label: "ID", minWidth: 170 },
    { id:"name",label: "NAME", minWidth: 170 },
    { id:"price",label: "PRICE", minWidth: 170 },
    { id:"category",label: "CATEGORY", minWidth: 100 },
    {
        id:"actions",
        label: "ACTIONS",
        minWidth: 100,
        colSpan: 2,
        align: "center",
    },
];

const CreateProduct = () => {
    return (
       <Container sx={{ minHeight: "79vh" }}>
        <Paper sx={{ width: "100%", my:2, overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    
                                    style={{
                                        minWidth: column.minWidth,
                                        background: "#d3d3d3",
                                    }}
                                    colSpan={column.colSpan}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover role="checkbox" tabIndex={-1} >
                            <TableCell>112sdfsdfds552fsd</TableCell>
                            <TableCell>dfsdf</TableCell>
                            <TableCell>dfsdfsdf</TableCell>
                            <TableCell>dfsdfsdf</TableCell>
                            <TableCell>
                                <Button variant="contained">Edit</Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="error">Delete</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        </Container>
    )
}

export default CreateProduct