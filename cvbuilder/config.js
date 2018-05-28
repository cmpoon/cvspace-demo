export default {
  projectName: process.env.PROJECT_NAME || "CV Builder",
  server: {
    remote: process.env.SERVER_URL,
    bucket: "cvsbuilder",
  },
  appURL: process.env.APP_URL || window.location.origin + window.location.pathname,
  fieldList: [
    {
      id: "name",
      icon: "text-color",
      label: "Name & Contact",
      jsonSchema: {
        type: "string",
        title: "Name",
          description: "",
        default: "Your Name Here"
      },
      uiSchema: {
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Your Name"},
            description: {type: "string", title: "Your Address"},
            phone: {type: "string", title: "Your Mobile Phone"},
            uniemail: {type: "string", title: "Your University Email"},
            personalemail: {type: "string", title: "Your Personal Email"},
          }
        },
      },
      formData: {}
    },
      {
          id: "edu",
          icon: "align-left",
          label: "Education",
          jsonSchema: {
              type: "string",
              title: "Edit me",
              description: "",
              default: ""
          },
          uiSchema: {
              "ui:widget": "textarea",
              editSchema: {
                  type: "object",
                  properties: {
                      title: {type: "string", title: "University Attending", default: "Imperial College London"},
                      description: {type: "string", title: "Course", default:"BSc in Mathematics"},
                      expresults: {type: "string", title: "Expected Results Summary"},
                      college: {type: "string", title: "Secondary Education"},
                      colresults: {type: "string", title: "A-Level Results"},
                      gcseresults: {type: "string", title: "GCSE and Other Qualification Summary"},
                  }
              },
          },
          formData: {}
      },
      {
          id: "workexp",
          icon: "align-left",
          label: "Work Experience",
          jsonSchema: {
              type: "string",
              title: "Edit me",
              description: "",
              default: ""
          },
          uiSchema: {
              "ui:widget": "textarea",
              editSchema: {
                  type: "object",
                  properties: {
                      title: {type: "string", title: "Section Header"},
                      description: {type: "string", title: "Bullet Points"}
                  }
              },
          },
          formData: {}
      },
      {
          id: "multilinetext",
          icon: "align-left",
          label: "Experience Section",
          jsonSchema: {
              type: "string",
              title: "Edit me",
              description: "",
              default: ""
          },
          uiSchema: {
              "ui:widget": "textarea",
              editSchema: {
                  type: "object",
                  properties: {
                      title: {type: "string", title: "Section Header"},
                      description: {type: "string", title: "Bullet Points"}
                  }
              },
          },
          formData: {}
      },
    /*{
      id: "checkbox",
      icon: "check",
      label: "Checkbox",
      jsonSchema: {
        type: "boolean",
        title: "Edit me",
        default: false,
      },
      uiSchema: {
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },*/
    {
        id: "multiple-checkbox",
        icon: "check",
        label: "Bullet Points",
        jsonSchema: {
            type: "array",
            title: "Bullet points for this section",
            items: {
                type: "string",
                enum: ["Partcipated in...", "Delivered...", "Implemented..."],
            },
            uniqueItems: true,
        },
      uiSchema: {
        "ui:widget": "checkboxes",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            items: {
              type: "object",
              title: "Choices",
              properties: {
                enum: {
                  title: null,
                  type: "array",
                  items: {
                    type: "string"
                  },
                  default: ["Partcipated in...", "Delivered...", "Implemented..."],
                }
              }
            }
          }
        },
      },
      formData: {}
    },
    /*{
      id: "radiobuttonlist",
      icon: "list",
      label: "Choice list",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        enum: ["option 1", "option 2", "option 3"],
      },
      uiSchema: {
        "ui:widget": "radio",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "Options",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },
    {
      id: "select",
      icon: "chevron-down",
      label: "Select List",
      jsonSchema: {
        type: "string",
        format: "string",
        title: "Edit me",
        enum: ["option 1", "option 2", "option 3"],
      },
      uiSchema: {
        "ui:widget": "select",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "Options",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },*/
    {
      id: "date",
      icon: "calendar",
      label: "Start/End Date",
      jsonSchema: {
        type: "string",
        format: "date",
        title: "Start and End Dates",
      },
      uiSchema: {
        "ui:widget": "alt-date",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"}
          }
        },
      },
      formData: {}
    },
  ],
};
