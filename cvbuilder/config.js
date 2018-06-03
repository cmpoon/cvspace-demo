export default {
    projectName: process.env.PROJECT_NAME || "CV Builder",
    server: {
        remote: process.env.SERVER_URL,
        bucket: "cvsbuilder",
    },
    appURL: process.env.APP_URL || window.location.origin + window.location.pathname,
    initialSchema: {
        schema: {
            type: "object",
            title: "Untitled CV",
            description: "Enter some description for your CV here - e.g. which company is it for?",
            properties: {}
        },
        uiSchema: {
            "ui:order": []
        },
    },

    fieldList: [
        {
            id: "name",
            icon: "text-color",
            label: "Contact Details",

            required:true,
            jsonSchema: {
                type: "object",
                title:"Contact Details",

                required: ["name","phone","email-personal"],
                properties: {
                    name: {type: "string", title: "Your Name", default: "John Smith"},
                    address: {type: "string", title: "Your Address", default: "4 Privet Drive, Surrey GU14 5BH"},
                    phone: {type: "string", title: "Your Phone Number", default: "07987654321"},
                    "email-university": {type: "string", title: "Your University Email", default: "js1234@ic.ac.uk"},
                    "email-personal": {type: "string", title: "Your Personal Email", placeholder: "js1234@gmail.com"},
                }
            },
            uiSchema: {

                name: {"ui-placeholder": "John Smith"},
                address: {"ui-placeholder": "4 Privet Drive, Surrey GU14 5BH"},
                phone: {"ui-placeholder": "07987654321"},
                "email-university": {"ui-placeholder": "js1234@ic.ac.uk"},
                "email-personal": {"ui-placeholder": "js1234@gmail.com"},

                editSchema: {
                    type: "object",
                    title: "Name and Contact Details",
                    properties: {
                        name: {type: "boolean"},
                        address: {type: "boolean"},
                        phone: {type: "boolean"},
                        "email-university": {type: "boolean"},
                        "email-personal": {type: "boolean"}
                    },
                },
            },
            formData: {}
        },
        {
            id: "education",
            icon: "align-left",
            label: "Education",
            jsonSchema: {
                type: "string",
                title: "Education Summary",
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
            label: "Additional Experience",
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
            label: "Personal Development",
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
