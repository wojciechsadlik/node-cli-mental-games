import IGame from "./IGame.js";
import InquirerForms from "./InquirerForms.js";
import { getRandomIntArrBetween, SMALL_A_UNICODE, SMALL_Z_UNICODE, timer, pressKeyToContinue } from "./utils.js";

class LettersMemoryGame implements IGame {
    get getName(): string {
        return "Letters Memory";
    }

    async Play() {
        const difficulty = await this.getDifficulty();

        const task = this.generateTask(difficulty);

        console.log(`You'll see ${difficulty} letters one by one, press any key to continue`);
        for (let i = 0; i < task.length; i++) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(` ${i+1}: ${task[i]} `);

            await pressKeyToContinue();
        }

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);

        console.log(task);
    }

    private async getDifficulty(): Promise<number> {
        let difficulty: number = await InquirerForms.lettersMemoDifficulty();

        while (difficulty < 1) {
            console.log("Difficulty has to be greater than 0");
            difficulty = await InquirerForms.lettersMemoDifficulty();
        }

        return difficulty;
    }

    private generateTask(length: number): string {
        const randomStr = String.fromCharCode(
            ...getRandomIntArrBetween(SMALL_A_UNICODE,
                SMALL_Z_UNICODE + 1,
                length));

        return randomStr;
    }
}

export default LettersMemoryGame;