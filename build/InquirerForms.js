import inquirer from "inquirer";
class InquirerForms {
    static async getName() {
        const answer = await inquirer.prompt({
            name: "player_name",
            type: "input",
            message: "What is your name?",
            default() {
                return "Player";
            }
        });
        console.log(`Hi ${answer.player_name}!`);
        return answer.player_name;
    }
    static async mainMenu(games) {
        const answer = await inquirer.prompt({
            name: "chosen_option",
            type: "list",
            message: "Pick an option",
            choices: Array.from(games, game => game.getName)
                .concat([
                this.DISPLAY_STATS,
                this.CLEAR_STATS,
                this.EXIT
            ])
        });
        return answer.chosen_option;
    }
    static async getNumberDifficulty() {
        const answer = await inquirer.prompt({
            name: "difficulty",
            type: "number",
            message: "Enter difficulty (> 0)",
            default() {
                return 1;
            }
        });
        return Math.floor(answer.difficulty);
    }
    static async getStringAnswer() {
        const answer = await inquirer.prompt({
            name: "answer",
            type: "input",
            message: "Enter letters"
        });
        return answer.answer;
    }
    static async pickGameName(gameNames) {
        const answer = await inquirer.prompt({
            name: "game_name",
            type: "list",
            message: "Which game?",
            choices: gameNames.concat(this.BACK)
        });
        return answer.game_name;
    }
    static async confirmClearRecords() {
        const answer = await inquirer.prompt({
            name: "confirmed",
            type: "confirm",
            message: "Do you want to clear your data?"
        });
        return answer.confirmed;
    }
}
InquirerForms.EXIT = "Exit";
InquirerForms.DISPLAY_STATS = "Display stats";
InquirerForms.CLEAR_STATS = "Clear stats";
InquirerForms.BACK = "Back";
export default InquirerForms;
