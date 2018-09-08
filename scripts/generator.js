const program = require("commander");
const fs = require("fs");
const mkdirp = require("mkdirp");

const templateIndex = componentName => `
import ${componentName} from './${componentName}'

export default ${componentName};
`;

program
  .command("component <component_name>")
  .action(function(component_name, cmd) {
    mkdirp(`./components/${component_name}`, function(err) {
      if (err) console.error(err);

      fs.writeFile("index.js", templateIndex(component_name), function(err) {
        if (err) throw err;
        console.log(`created index.js`);
      });

      fs.writeFile(
        `${component_name}.js`,
        templateComponent(component_name),
        function(err) {
          if (err) throw err;
          console.log(`created ${component_name}.js`);
        }
      );

      fs.writeFile("Styled.js", templateStyled(), function(err) {
        if (err) throw err;
        console.log(`created index.js`);
      });
    });
  });

program.parse(process.argv);

const templateComponent = componentName => `
import React, { Component } from "react";
import {} from "./Styled";

export default class ${componentName} extends Component {
  render() {
    return <div />;
  }
}
`;

const templateStyled = () => `
import styled from "styled-components";

export const Foo = styled.div``;
`;
