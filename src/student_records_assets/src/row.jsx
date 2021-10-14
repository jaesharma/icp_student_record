import React from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Done } from "@material-ui/icons/index";
import TextField from "@material-ui/core/TextField";

const Row = (props) => {
  const {
    id,
    name,
    index,
    age,
    school,
    classes,
    header,
    deleteEntry,
    deletingEntry,
    editEntry,
    editingEntry,
    cancelEditing,
    updateEntry,
    updating,
    editingState,
    handleEditingStateChange,
  } = props;
  return (
    <div
      key={index}
      className={`${classes.row} ${header && classes.headerRow} ${
        editingEntry === id && classes.editingRow
      }`}
    >
      <p
        style={{
          fontSize: "1.2rem",
          overflowX: "ellipsis",
          borderRight: "1px solid #aaa",
          width: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!header && index}
      </p>
      <h5
        className={`${classes.cell} ${header && classes.headerCell} ${
          classes.name
        }`}
      >
        {!header && editingEntry === id ? (
          <TextField
            autoFocus
            id="name"
            name="name"
            value={editingState.name}
            disabled={updating}
            onChange={handleEditingStateChange}
          />
        ) : (
          name
        )}
      </h5>
      <h5
        className={`${classes.cell}  ${header && classes.headerCell} ${
          classes.age
        }`}
      >
        {!header && editingEntry === id ? (
          <TextField
            id="age"
            name="age"
            value={editingState.age}
            disabled={updating}
            onChange={handleEditingStateChange}
          />
        ) : (
          `${age}`
        )}
      </h5>
      <h5
        className={`${classes.cell} ${header && classes.headerCell} ${
          classes.school
        }`}
      >
        {!header && editingEntry === id ? (
          <TextField
            id="school"
            name="school"
            value={editingState.school}
            disabled={updating}
            onChange={handleEditingStateChange}
          />
        ) : (
          school
        )}
      </h5>
      {!header && (
        <div className={classes.iconBtn}>
          {editingEntry === id ? (
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => cancelEditing()}
            />
          ) : (
            <EditOutlinedIcon
              className={`${classes.edit} ${classes.disabled}`}
              onClick={() => editEntry(id, index)}
            />
          )}
        </div>
      )}
      {!header && (
        <div className={classes.iconBtn}>
          {deletingEntry === id || (editingEntry === id && updating) ? (
            <CircularProgress size={18} />
          ) : editingEntry === id ? (
            <Done className={classes.done} onClick={() => updateEntry()} />
          ) : (
            <DeleteOutlineOutlinedIcon
              className={classes.delete}
              onClick={() => deleteEntry(id)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Row;
