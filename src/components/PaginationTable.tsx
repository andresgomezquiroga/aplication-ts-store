import React from "react";
import { Pagination as MUIPagination, Stack } from "@mui/material";
import { PaginationProps } from "../props/PaginationProps";


export const PaginationTable: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <MUIPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </Stack>  
  );
};
