import React from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  } = props;
  return (
    <div
      key={index}
      className={`${classes.row} ${header && classes.headerRow}`}
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
        {name}
      </h5>
      <h5
        className={`${classes.cell}  ${header && classes.headerCell} ${
          classes.age
        }`}
      >
        {`${age}`}
      </h5>
      <h5
        className={`${classes.cell} ${header && classes.headerCell} ${
          classes.school
        }`}
      >
        {school}
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
              onClick={() => editEntry(id)}
            />
          )}
        </div>
      )}
      {!header && (
        <div className={classes.iconBtn}>
          {deletingEntry === id ? (
            <CircularProgress size={18} />
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
