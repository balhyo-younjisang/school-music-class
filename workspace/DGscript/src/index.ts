import { promises as fs, stat } from "fs";
import DgScript from "./dgscript";
// import readline from "readline-sync";

class DgScriptInterpreter extends DgScript {
  private interpreter = (statements: string[]) => {
    let pointer: number = 0;

    while (!(statements[pointer] === "END")) {
      const tokenSequence = this.tokenization(statements[pointer++]);
    }
  };

  private tokenization = (statement: string) => {
    const tokens = statement.split(" "); // Tokenize by space

    console.log(tokens);

    const tokenSequence: object = {};
  };

  public extension = async (path: string) => {
    // Check file extension
    if (path.split(".")[1] !== "sdhs") {
      throw new Error(`Invalid file extension error`);
    }

    try {
      try {
        fs.access(path);
      } catch (e: any) {
        throw new Error(`Invalid file extension error`); // Invalid file extension
      }

      const code: string = await fs.readFile(path, "utf-8");
      this.interpreter(code.split("\r\n")); // Break by line
    } catch (e: any) {
      process.stderr.write(`${e.message}\n`);
    }
  };
}

const interpreter: DgScriptInterpreter = new DgScriptInterpreter();

if (process.argv[2]) interpreter.extension(process.argv[2]);
