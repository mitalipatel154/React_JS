import { useState, useEffect } from "react";

export default function RecordRow({ record, onEdit, onDelete }) {
    return (
        <tr>
            <td>{record.name}</td>
            <td>{record.email}</td>
            <td>
                <button className="edit" onClick={() => onEdit(record.id)}>Edit</button>
                <button className="delete" onClick={() => onDelete(record.id)}>Delete</button>
            </td>
        </tr>
    );
}