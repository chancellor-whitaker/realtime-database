import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo } from "react";

import { useRealtimeDataList } from "./hooks/useRealtimeDataList";
import { writePostData } from "./functions/writePostData";

const readOnlyEdit = true;

const onCellEditRequest = (event) => {
  const row = event.data;

  const newValue = event.newValue;

  const field = event.colDef.field;

  // could write newRow to a log with a timestamp
  // log would be another json table in firebase database
  const newRow = { ...row, [field]: newValue };

  writePostData(newRow);
};

const getRowId = (params) => String(params.data.id);

export default function App() {
  const rowData = useRealtimeDataList();

  const columnDefs = useMemo(
    () =>
      [...new Set(rowData.map((row) => Object.keys(row)).flat())].map(
        (field) => ({ editable: field !== "id", field })
      ),
    [rowData]
  );

  useEffect(() => {
    console.log(rowData);
  }, [rowData]);

  return (
    <>
      <main className="container">
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <div style={{ height: 500 }}>
            <AgGridReact
              onCellEditRequest={onCellEditRequest}
              readOnlyEdit={readOnlyEdit}
              columnDefs={columnDefs}
              getRowId={getRowId}
              rowData={rowData}
            />
          </div>
        </div>
      </main>
    </>
  );
}
