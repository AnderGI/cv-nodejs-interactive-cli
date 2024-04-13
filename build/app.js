#! /usr/bin/env node
import { input, select } from "@inquirer/prompts";
import { USER_CHOICES } from "./domain/user-choices.js";
import { addUserChoices } from "./domain/add-user-choice.js";
const name = await input({ message: "Enter your name: " });
const option = await select({
    message: `Hi ${name} what would you like to do ?`,
    choices: addUserChoices(USER_CHOICES),
});
// ocp
const handleOption = (option) => {
    if (option === 1) {
        // email
        console.log("Send me an email to agibarguen@gmail.com");
    }
};
handleOption(option);
