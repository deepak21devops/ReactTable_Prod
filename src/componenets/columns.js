import ColumnSort from './ColumnSort'
export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnSort
    },

    {
        Header: 'Name',
        Footer: 'name',
        accessor: 'name',
        Filter: ColumnSort
    },

    {
        Header: 'Status',
        accessor: 'status',
        Filter: ColumnSort
    },
    {
        Header: 'Email',
        accessor: 'email',
        Filter: ColumnSort
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        Filter: ColumnSort
    }
]


