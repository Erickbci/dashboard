import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const columnDefs = [
  { headerName: 'ID', field: 'id' },
  { headerName: 'Vendedora', field: 'seller' },
  { headerName: 'Percentual', field: 'percentage' },
  { headerName: 'City', field: 'city' }
];

const rowData = [
  { id: 1, seller: 'John Doe', percentage: 25, city: 'New York' },
  { id: 2, seller: 'Jane Smith', percentage: 30, city: 'San Francisco' },
  { id: 3, seller: 'Bob Johnson', percentage: 35, city: 'Chicago' }
];
const GridChart = () => {

  return (
    <div className="ag-theme-alpine" style={{ height: '300px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
    
}

export default GridChart