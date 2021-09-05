import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './columns'
import { ColumnFilter } from './ColumnFilter'
import ColumnSort from './ColumnSort'
function BasicTable({ main, pagelinks }) {


    const data = useMemo(() => main, [main])
    // const headers = useMemo(() => pagelinks, [pagelinks])

    const columns = useMemo(() => COLUMNS, [])

    // const { previous, next, current } = headers



    const defaultColumn = useMemo(() => { return { Filter: ColumnSort } }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        state,
        setPageSize,
        prepareRow,
        allColumns,
        // getToggleHideAllColumnsProps,
        setGlobalFilter } = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageSize } = state




    return (
        <div>
            <>
                <ColumnFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} />
                <div>

                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        {
                            allColumns.map(ele => {

                                if (ele.Header === 'Email' || ele.Header === 'Gender') {
                                    return <div key={ele.Header} style={{ display: "flex", float: "left", marginRight: "10px" }}>
                                        <div style={{}}>
                                            <label>{ele.Header}</label>
                                            <input type="checkbox" {...ele.getToggleHiddenProps()}></input>
                                        </div>

                                    </div>
                                }
                            }

                            )
                        }
                    </div>
                </div>
                <table {...getTableProps}>

                    <thead>
                        {headerGroups.map(headGroup =>
                            <tr {...headGroup.getHeaderGroupProps()}>

                                {headGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ""}</span>
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))}

                            </tr>
                        )}

                    </thead>

                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
            <div style={{ textAlign: 'center', marginTop: "20px" }}>Select Page Record Limit:
                <select style={{ margin: "10px" }} value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {[5, 10, 20].map((pageSize) => (
                        <option key={pageSize} >{pageSize}</option>
                    ))}
                </select>
            </div><br></br>
        </div >
    )
}

export default BasicTable
