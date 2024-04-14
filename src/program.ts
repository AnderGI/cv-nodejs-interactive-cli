import { Command } from "commander";
import { displayPersonalCareer } from "./display-personal-career.js";
export const program = new Command();

program
  .name('Personal dev CV')
  .description(`
  Welcome to my interactive cli !!! 
  Here you will be able to see my professional career, contact me, ¿stalk me?, and much more.
  All the commands will be displayed down below with an understandable description.`)
  .version('0.0.1');

  program.command('career')
  .description('This command will display all the info related to my professional software development career')
  .action(displayPersonalCareer);
