import Typography from "@mui/material/Typography";

import React from "react";
// import { IFilm } from "../redux/interfaces";
import CircularProgressWithLabel from "./loader.component";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

import Box from "@mui/material/Box";

interface IOutputBlockProps {
  isLoading: boolean;
  firstFirstName: string;
  firstSecondName: string;
  secondFirstName: string;
  secondSecondName: string;
  count: number;
  // list?: Array<IFilm>;
  list?: Array<string>;
}

export const OutputBlock: React.FC<IOutputBlockProps> = ({
  isLoading,
  firstFirstName,
  firstSecondName,
  secondFirstName,
  secondSecondName,
  count,
  list,
}) => {
  const outputText = `${firstFirstName} ${firstSecondName} and ${secondFirstName} ${secondSecondName} appeared in ${count} films`;

  // const listToRender = list?.map((film) => {
  //   return {
  //     ...film,
  //     id: list.indexOf(film),
  //   };
  // });
  const listToRender = list?.map((film) => {
    return {
      film,
      id: list.indexOf(film),
    };
  });

  const columns: GridColDef[] = [
    // {
    //   field: "year",
    //   headerName: "Year",
    // },
    {
      field: "film",
      headerName: "Title",
      width: 800,
      flex: 1,
    },
    // {
    //   field: "url",
    //   headerName: "Link",
    //   minWidth: 800,
    // },
  ];

  return (
    <div className="py-4">
      {isLoading ? (
        <CircularProgressWithLabel />
      ) : (
        <div className="">
          <Typography variant="h4">{outputText}</Typography>

          {list?.length === 0 ? null : (
            <Box
              sx={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 20,
                paddingRight: 20,
                height: 300,
                width: "100%",
              }}
            >
              <DataGrid
                rows={listToRender as GridRowsProp}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                onRowClick={(rowData) => window.open(rowData.row.url, "_blank")}
                disableSelectionOnClick
              />
            </Box>
          )}
        </div>
      )}
    </div>
  );
};
