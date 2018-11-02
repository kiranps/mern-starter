const program = require("commander");
const generateComponent = require("./generateComponent");
const generateService = require("./generateService");

program
  .command("component <component_name>")
  .alias("c")
  .action(generateComponent);

program
  .command("service <service_name>")
  .alias("s")
  .action(generateService);

program.parse(process.argv);
