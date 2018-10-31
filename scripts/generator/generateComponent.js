const fs = require("fs");
const mkdirp = require("mkdirp");
const chalk = require("chalk");

const generateComponent = (component_name, cmd) => {
  const componentPath = `./src/components/${component_name}`;

  if (fs.existsSync(componentPath)) {
    console.log(chalk.red(`component ${component_name} already exists`));
  } else {
    mkdirp(componentPath, function(err) {
      if (err) console.error(err);

      fs.writeFile(
        `${componentPath}/index.js`,
        templateIndex(component_name),
        function(err) {
          if (err) throw err;
          console.log(chalk.green(`created ${componentPath}/index.js`));
        }
      );

      fs.writeFile(
        `${componentPath}/${component_name}.js`,
        templateComponent(component_name),
        function(err) {
          if (err) throw err;
          console.log(
            chalk.green(`created ${componentPath}/${component_name}.js`)
          );
        }
      );

      fs.writeFile(`${componentPath}/Styled.js`, templateStyled(), function(
        err
      ) {
        if (err) throw err;
        console.log(chalk.green(`created ${componentPath}/Styled.js`));
      });
    });
  }
};

const templateIndex = componentName => `
import ${componentName} from './${componentName}'

export default ${componentName};
`;

const templateComponent = componentName => `
import React, { Component } from "react";
import {} from "./Styled";

export default class ${componentName} extends Component {
  render() {
    return <div />;
  }
}

${componentName}.defaultProps = {
}
`;

const templateStyled = () => `
import styled from "styled-components/macro";

export const Foo = styled.div\`\`;

Foo.defaultProps = {
}
`;

module.exports = generateComponent;
