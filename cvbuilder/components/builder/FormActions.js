import React from "react";
import FieldListDropdown from "./FieldListDropdown";
import {Button, ButtonToolbar, ButtonGroup}  from "react-bootstrap";

export default function FormActions(props) {
  const onClick = (event) => {
    props.publishForm(({collection, adminToken}) => {
      props.history.pushState(null, `/builder/published/${adminToken}`);
    });
  };

  let saveIconName;
  if (props.status == "pending") {
    saveIconName = "refresh spin";
  } else {
    saveIconName = "save";
  }

  return (
    <div>
      <ButtonToolbar className="builder-inner-actions">
        <FieldListDropdown className="pull-right" {...props}>
          <i className="glyphicon glyphicon-plus" />
          Add a Section
        </FieldListDropdown>
      </ButtonToolbar>
      <ButtonGroup className="pull-right">
          {
            /*<Button bsStyle="danger" onClick={() => confirm("This action will delete all unsaved changes to the CV, Are you sure?") && props.resetForm()}>
          <i className="glyphicon glyphicon-remove" />
          Delete <span className="hidden-xs">CV</span>
        </Button>*/
          }
        <Button bsStyle="success" onClick={onClick}>
          <i className={`glyphicon glyphicon-${saveIconName}`} />
          Save your CV
        </Button>
      </ButtonGroup>
    </div>
  );
}
