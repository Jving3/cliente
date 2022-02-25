import { useContext, useMemo } from "react";
import ActivityContext from "../context/activity/activityContext";
import { useTable } from "react-table";
import { COLUMNS } from "../models/columns";
import '../index.css';

const TableActivity = () => {

    const { chart } = useContext(ActivityContext);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => chart, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })



    return (
        <div className="table-container">
        <table {...getTableProps}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {
                            headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    );
}

export default TableActivity;