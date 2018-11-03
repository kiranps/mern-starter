const program = require("commander");
const generateComponent = require("./generateComponent");
const generatePage = require("./generatePage");
const generateService = require("./generateService");

program
  .command("component <component_name>")
  .alias("c")
  .action(generateComponent);

program
  .command("page <component_name>")
  .alias("p")
  .action(generatePage);

program
  .command("service <service_name>")
  .alias("s")
  .action(generateService);

program.parse(process.argv);
