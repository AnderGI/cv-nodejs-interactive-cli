#! /usr/bin/env node

import { input, select, expand } from "@inquirer/prompts";
import { USER_CHOICES } from "./domain/user-choices.js";
import { addUserChoices } from "./domain/add-user-choice.js";

(async () => {
  const name:string = await input({ message: "Enter your name: " });
  const option:number = await select({
    message: `Hi ${name} what would you like to do ?`,
    choices: addUserChoices(USER_CHOICES),
  });

  // ocp
  const handleOption = (option:number) => {
    if(option === 1){
      // email
      console.log("Send me an email to agibarguen@gmail.com");
    }
  }

  handleOption(option);

  const answer = await expand({
    message: 'Conflict on file.js',
    default: 'y',
    choices: [
      {
        key: 'y',
        name: 'Overwrite',
        value: 'overwrite',
      },
      {
        key: 'a',
        name: 'Overwrite this one and all next',
        value: 'overwrite_all',
      },
      {
        key: 'd',
        name: 'Show diff',
        value: 'diff',
      },
      {
        key: 'x',
        name: 'Abort',
        value: 'abort',
      },
    ],
  });

  console.log(answer);
})();
