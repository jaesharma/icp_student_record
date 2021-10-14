import * as React from "react";
import { render } from "react-dom";
import { student_records } from "../../declarations/student_records";
import { makeStyles } from "@material-ui/core";
import Content from "./content";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    background: "#F9F3DF",
  },
}));

const App = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    loading: true,
    records: [],
  });
  React.useEffect(() => {
    setRecords();
  });

  const setRecords = async () => {
    const records = await student_records.getEntries();
    setState((state) => ({
      ...state,
      loading: false,
      records:
        records?.map((record) => ({
          id: record[0],
          ...record[1],
        })) || [],
    }));
  };

  const addNew = async (record) => {
    setState((state) => ({
      ...state,
      records: [...state.records, record],
    }));
  };

  const update = async (id, entry) => {
    const index = state.records.findIndex((record) => record.id === id);
    if (index === -1) return;
    const updatedRecords = [...state.records];
    updatedRecords[index] = entry;
    setState((state) => ({
      ...state,
      records: updatedRecords,
    }));
  };

  const deleteLocalRecord = async (id) => {
    setState((state) => ({
      ...state,
      records: state.records.filter((record) => record.id !== id),
    }));
  };

  return (
    <div className={classes.container}>
      <Content
        records={state.records}
        loading={state.loading}
        addNew={addNew}
        update={update}
        deleteLocalRecord={deleteLocalRecord}
      />
    </div>
  );
};

render(<App />, document.getElementById("app"));
