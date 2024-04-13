import { UserChoice } from "./user-choice.interface.js";

export function addUserChoices(userChoice:UserChoice[]):UserChoice[]{
    const userChoices:UserChoice[] = []
    userChoices.push(...userChoice);
    return userChoices;
}