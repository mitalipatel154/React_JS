import { useState, useEffect } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import "./App.css";


export default function App() {
  const [records, setRecords] = useState([]);
  const [editingId, setEditingId] = useState(null);


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(stored);
  }, []);


  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);


  const saveRecord = (data) => {
    if (editingId) {
      setRecords(records.map(r => r.id === editingId ? { ...r, ...data } : r));
      setEditingId(null);
    } else {
      setRecords([...records, { ...data, id: Date.now() }]);
    }
  };


  const deleteRecord = (id) => {
    setRecords(records.filter(r => r.id !== id));
  };


  const clearAllRecords = () => {
    if (window.confirm("Clear all records?")) {
      setRecords([]);
    }
  };


  const editingRecord = records.find(r => r.id === editingId);


  return (
    <div className="container">
      <h1>Record Management Dashboard</h1>


      <RecordForm
        onSave={saveRecord}
        editingRecord={editingRecord}
        onCancel={() => setEditingId(null)}
      />


      <div className="records">
        <p>Total Records: {records.length}</p>
        {records.length > 0 && (
          <button className="delete" onClick={clearAllRecords}>Clear All</button>
        )}
      </div>


      <RecordList
        records={records}
        onEdit={setEditingId}
        onDelete={deleteRecord}
      />
    </div>
  );
}