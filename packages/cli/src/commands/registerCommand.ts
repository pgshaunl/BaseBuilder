/* eslint-disable no-unused-vars */
import { Command, program } from "commander";

type Fn = (p: Command) => Command

export function registerCommand(fn1: Fn) {
    program.addCommand(fn1(program))
}