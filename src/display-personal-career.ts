import { input } from "@inquirer/prompts";

export const displayPersonalCareer = () => {
    input({message: "Hi visitor, what's your name? "})
    .then(name => console.log(`Hi ${name}, glad to see you. Here you have my personal career displayed`))
}