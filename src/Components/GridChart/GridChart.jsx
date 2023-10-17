import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const columnDefs = [
  { headerName: 'ID', field: 'id' },
  { headerName: 'Vendedora', field: 'seller' },
  { headerName: 'Percentual', field: 'percentage' },
  { headerName: 'Profissão', field: 'job' }
];

const rowData = [
  { id: 1, seller: 'Thais', percentage: 25, job: 'Lash' },
  { id: 2, seller: 'Joana', percentage: 30, job: 'Manicure/pedicure' },
  { id: 3, seller: 'Rebeca', percentage: 35, job: 'Designer de sobrancelhas' }
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