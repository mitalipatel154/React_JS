import RecordRow from "./RecordRow";

export default function RecordList({ records, onEdit, onDelete }) {
    if (records.length === 0) {
        return <p className="empty">No Records Found</p>;
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {records.map(record => (
                    <RecordRow
                        key={record.id}
                        record={record}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    );
}