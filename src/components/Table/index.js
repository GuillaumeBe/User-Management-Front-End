import React from "react";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";
import Title from "../Title";
import Subtitle from "../Subtitle";
import Button from "../Button";

import {
  Container,
  StyledTable,
  THead,
  TBody,
  TR,
  TH,
  TD,
  StyledButton,
  Pagination,
} from "./style.js";

const Table = ({ columns, data, title, subtitle, onRowClick }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      autoResetPage: false,
    },
    usePagination
  );

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <StyledTable {...getTableProps()}>
        <THead>
          {headerGroups.map((headerGroup) => (
            <TR {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TH {...column.getHeaderProps()}>{column.render("Header")}</TH>
              ))}
            </TR>
          ))}
        </THead>
        <TBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TR
                {...row.getRowProps()}
                onClick={() =>
                  onRowClick && onRowClick({ id: row.original._id })
                }
                isClickable={Boolean(onRowClick)}
              >
                {row.cells.map((cell) => {
                  return (
                    <TD {...cell.getCellProps()}>{cell.render("Cell")}</TD>
                  );
                })}
              </TR>
            );
          })}
        </TBody>
      </StyledTable>
      <Pagination>
        <Link to="/">
          <Button type="button" isSecondary>
            Précédent
          </Button>
        </Link>
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} sur {pageOptions.length || 1}
            </strong>{" "}
          </span>
          <StyledButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <ChevronsLeft size={16} />
          </StyledButton>{" "}
          <StyledButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <ChevronLeft size={16} />
          </StyledButton>{" "}
          <StyledButton onClick={() => nextPage()} disabled={!canNextPage}>
            <ChevronRight size={16} />
          </StyledButton>{" "}
          <StyledButton
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <ChevronsRight size={16} />
          </StyledButton>{" "}
        </div>
        <div>
          <span>
            Aller à la page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Afficher {pageSize}
              </option>
            ))}
          </select>
        </div>
      </Pagination>
    </Container>
  );
};

export default Table;
