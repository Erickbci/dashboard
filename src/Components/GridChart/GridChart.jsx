import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const columnDefs = [
  { headerName: 'ID', field: 'id' },
  { headerName: 'Name', field: 'name' },
  { headerName: 'Age', field: 'age' },
  { headerName: 'City', field: 'city' }
];

const rowData = [
  { id: 1, name: 'John Doe', age: 25, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco' },
  { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' }
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