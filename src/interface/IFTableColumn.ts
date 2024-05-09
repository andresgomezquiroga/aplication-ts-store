export interface IFTableColumn {
    key: string
    label: string
    type: "text" | "image" | "button-edit" | "buttom-delete";
    onClick?: (rowData: any) => void
}