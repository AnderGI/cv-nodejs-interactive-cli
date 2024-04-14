#! /usr/bin/env node

import { program } from 'commander';

(async () => {
  program
    .option('--first')
    .option('-s, --separator <char>');
  
  program.parse();

})();
