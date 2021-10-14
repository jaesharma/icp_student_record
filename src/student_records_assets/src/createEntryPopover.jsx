import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fields: {
    display: "flex",
    flexDirection: "column",
    width: "35rem",
    borderTop: "1px solid #888",
    borderBottom: "1px solid #888",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
}));

const CreateEntryPopover = (props) => {
  const { open, onChange, onClose, createEntry, values } = props;
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create student entry</DialogTitle>
      <DialogContent className={classes.fields}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={values.name}
          onChange={onChange}
          disabled={values.creatingEntry}
        />
        <TextField
          margin="dense"
          id="age"
          name="age"
          label="Age"
          fullWidth
          variant="outlined"
          value={values.age}
          onChange={onChange}
          disabled={values.creatingEntry}
        />
        <TextField
          margin="dense"
          id="school"
          name="school"
          label="School"
          fullWidth
          variant="outlined"
          value={values.school}
          onChange={onChange}
          disabled={values.creatingEntry}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={createEntry}
          color="primary"
          disabled={values.creatingEntry}
        >
          {values.creatingEntry ? <CircularProgress size={18} /> : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEntryPopover;
