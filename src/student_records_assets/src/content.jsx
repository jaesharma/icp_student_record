import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./header.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import CreateEntryPopover from "./createEntryPopover";
import { student_records } from "../../declarations/student_records";
import Button from "@material-ui/core/Button";
import Row from "./row";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    paddingTop: "2rem",
    alignItems: "center",
    position: "relative",
  },
  row: {
    display: "flex",
    width: "100%",
  },
  loadingContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    top: 100,
  },
  message: {
    fontSize: "1.2rem",
    marginTop: "2rem",
  },
  row: {
    display: "flex",
    width: "65%",
    alignSelf: "center",
    justifyContent: "flex-start",
    padding: "4px",
    border: "1px solid #aaa",
    transition: "all ease-in-out .3s",
    "&:hover": {
      background: "#aaa",
    },
  },
  cell: {
    display: "flex",
    width: "30%",
    borderRight: "1px solid #aaa",
    paddingLeft: "8px",
    overflowX: "ellipsis",
    fontSize: "1.2rem",
    fontWeight: 400,
  },
  headerRow: {},
  headerCell: {
    fontWeight: 500,
    color: "#444",
    fontSize: "1.4rem",
  },
  iconBtn: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },
  edit: {
    fontSize: "1.3rem",
    "&:hover": {
      color: "blue",
    },
  },
  delete: {
    fontSize: "1.3rem",
    "&:hover": {
      color: "red",
    },
  },
  closeIcon: {
    fontSize: "1.3rem",
    "&:hover": {
      color: "red",
    },
  },
  actionHeader: {
    display: "flex",
    width: "65%",
    justifyContent: "flex-end",
    marginBottom: "1.5rem",
  },
  addBtn: {
    fontSize: "1rem",
    padding: "4px 8px",
    textTransform: "none",
    backgroundColor: "#001E6C",
    color: "white",
    "&:hover": {
      backgroundColor: "#001E6C",
      color: "white",
    },
  },
}));

const Content = (props) => {
  const { records, loading } = props;
  const [state, setState] = useState({
    entryPopover: false,
    name: "",
    age: "",
    school: "",
    creatingEntry: false,
    deletingEntry: "",
    editingEntry: "",
  });
  const classes = useStyles();
  const createEntry = async (event) => {
    setState((state) => ({
      ...state,
      creatingEntry: true,
    }));
    const { name, age, school } = state;
    const id = `${Math.random()}`;
    const entry = {
      name,
      age: parseInt(age),
      school,
    };
    await student_records.createEntry(id, entry);
    togglePopover();
  };
  const togglePopover = (event) => {
    setState((state) => ({
      ...state,
      entryPopover: !state.entryPopover,
      name: "",
      age: "",
      school: "",
      creatingEntry: false,
    }));
  };
  const onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (value && name === "age") {
      let isInt = /^\d+$/.test(value);
      if (!isInt) return;
    }
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const deleteEntry = async (id) => {
    setState((state) => ({
      ...state,
      deletingEntry: id,
    }));
    await student_records.deleteEntry(id);
    setState((state) => ({
      ...state,
      deletingEntry: "",
    }));
  };
  const editEntry = async (id) => {
    setState((state) => ({
      ...state,
      editingEntry: id,
    }));
  };
  const cancelEditing = () => {
    setState((state) => ({
      ...state,
      editingEntry: "",
    }));
  };
  return (
    <div className={classes.container}>
      <CreateEntryPopover
        open={state.entryPopover}
        onChange={onChangeHandler}
        onClose={togglePopover}
        createEntry={createEntry}
        values={state}
      />
      <Header />
      <div className={classes.list}>
        {loading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress size={38} />
            <div className={classes.message}>Loading records...</div>
          </div>
        ) : (
          <Fragment>
            <div className={classes.actionHeader}>
              <Button
                variant="contained"
                className={classes.addBtn}
                disableFocusRipple
                disableElevation
                onClick={() => togglePopover()}
              >
                Create Entry
              </Button>
            </div>
            <Row
              classes={classes}
              name={"Name"}
              age={"Age"}
              school={"School"}
              header={true}
            />
            {records.map((record, index) => (
              <Row
                classes={classes}
                key={index}
                index={index + 1}
                name={record.name}
                age={record.age}
                school={record.school}
                id={record.id}
                deleteEntry={deleteEntry}
                deletingEntry={state.deletingEntry}
                editEntry={editEntry}
                editingEntry={state.editingEntry}
                cancelEditing={cancelEditing}
              />
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Content;
