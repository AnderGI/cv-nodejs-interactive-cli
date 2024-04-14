import { Command } from "commander";
export const program = new Command();

program
  .name('Personal dev CV')
  .description(`
  Welcome to my interactive cli !!! 
  Here you will be able to see my professional career, contact me, ¿stalk me?, and much more.
  All the commands will be displayed down below with an understandable description.`)
  .version('0.0.1');

  program.command('career')
  .description('This command will display all th einfo related to my professional software development career')
  //.argument('<string>', 'string to split')
  //.option('--first', 'display just the first substring')
  //.option('-s, --separator <char>', 'separator character', ',')
  .action(() => console.log('Personal career'));
