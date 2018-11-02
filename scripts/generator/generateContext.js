const fs = require("fs");
const chalk = require("chalk");

const generateService = (service_name, cmd) => {
  const servicePath = `./src/services`;

  if (fs.existsSync(`${servicePath}/${service_name}.js`)) {
    console.log(chalk.red(`service ${service_name} already exists`));
  } else {
    fs.writeFile(
      `${servicePath}/${service_name}.js`,
      templateService(service_name),
      function(err) {
        if (err) throw err;
        console.log(chalk.green(`created ${servicePath}/${service_name}.js`));
      }
    );
  }
};

const templateService = () => `
export const fetchData = () =>
  fetch('/data.json')
    .then(data => {
      return data.json();
    })
    .then(data => {
      return data
    });
`;

module.exports = generateService;
