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

  async function setRecords() {
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
  }

  async function create() {
    const id = `${Math.random()}`;
    const entry = {
      name: "Jayesh",
      age: 22,
      school: "jyoti sr. sec. school",
    };
    await student_records.createEntry(id, entry);
  }

  return (
    <div className={classes.container}>
      <Content records={state.records} loading={state.loading} />
    </div>
  );
};

render(<App />, document.getElementById("app"));
