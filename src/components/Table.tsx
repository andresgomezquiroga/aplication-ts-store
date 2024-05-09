
import React from 'react'
import { TableProps } from '../props/TableProps'
import { IFTableColumn } from '../interface/IFTableColumn';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';


export const Table: React.FC<TableProps> = ({
    data, allColumns, selectedColumns
}) => {


    const filteredColumns = allColumns.filter((column) =>
        selectedColumns.includes(column.key)
    );

    const renderCellContent = (column: IFTableColumn, rowData: any) => {
        switch (column.type) {
            case "text":
                return rowData[column.key]
            case "image":
                return (
                    <img src={rowData[column.key]}
                        alt={`Image for ${column.key}`}
                        style={{ maxWidth: "50px", maxHeight: '50px' }} />
                )

            case "button-edit":
                return (
                    <button
                        className='bg-blue-800 p-3 rounded text-white'
                        onClick={() => column.onClick && column.onClick(rowData)}>
                        <CiEdit />{column.label}
                    </button>
                )

            case "buttom-delete":
                return (
                    <button
                        className='bg-red-600 p-3 rounded text-white'
                        onClick={() => column.onClick && column.onClick(rowData)}>
                        <MdDelete />{column.label}
                    </button>
                )

            default:
                return null
        }
    }
    return (
        <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    {filteredColumns.map((column) => (
                        <th key={column.key} scope="col" className="px-6 py-3">
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr className="bg-white border-b" key={rowIndex}>
                        {filteredColumns.map((column) => (
                            <td className="px-6 py-4" key={column.key}>
                                {renderCellContent(column, row)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
