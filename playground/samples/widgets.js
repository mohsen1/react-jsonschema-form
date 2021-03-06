module.exports = {
  schema: {
    title: "Widgets",
    type: "object",
    properties: {
      stringFormats: {
        type: "object",
        title: "String formats",
        properties: {
          email: {
            type: "string",
            format: "email"
          },
          uri: {
            type: "string",
            format: "uri"
          }
        }
      },
      boolean: {
        type: "object",
        title: "Boolean field",
        properties: {
          default: {
            type: "boolean",
            title: "checkbox (default)"
          },
          radio: {
            type: "boolean",
            title: "radio buttons"
          },
          select: {
            type: "boolean",
            title: "select box"
          }
        }
      },
      string: {
        type: "object",
        title: "String field",
        properties: {
          default: {
            type: "string",
            title: "text input (default)"
          },
          textarea: {
            type: "string",
            title: "textarea"
          },
          color: {
            type: "string",
            title: "color picker",
            default: "#151ce6"
          }
        }
      },
      secret: {
        type: "string",
        default: "I'm a hidden string."
      }
    }
  },
  uiSchema: {
    boolean: {
      radio: {
        "ui:widget": "radio"
      },
      select: {
        "ui:widget": "select"
      }
    },
    string: {
      textarea: {
        "ui:widget": "textarea"
      },
      color: {
        "ui:widget": "color"
      }
    },
    secret: {
      "ui:widget": "hidden"
    }
  },
  formData: {
    stringFormats: {
      email: "chuck@norris.net",
      uri: "http://chucknorris.com/",
    },
    boolean: {
      default: true,
      radio: true,
      select: true
    },
    string: {
      default: "Hello...",
      textarea: "... World"
    },
    secret: "I'm a hidden string."
  }
};
