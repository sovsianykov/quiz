import { Verb } from "../content/verbs";

export  default class MyArray {
 static   shuffleArray = (array: Verb[]) =>
         [...array].sort(() => Math.random() - 0.5);
}