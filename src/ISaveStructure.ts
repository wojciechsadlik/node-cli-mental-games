interface IGameResult {
    time: number;
    accuracy: number;
}

interface IGameRecords {
    gameName: string;
    gameData: IGameResult[];
}

interface ISaveStructure {
    gameRecords: IGameRecords[];
}

export {ISaveStructure, IGameRecords, IGameResult};