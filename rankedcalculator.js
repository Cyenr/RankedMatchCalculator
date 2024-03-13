// League Rank function declaration
function leagueRank (rankedMatches) {

// Variable declaration
    let matchNumber = 0;
    let victory = 'victory';
    let victoryRow = 'victory in a row';
    let victoryReset = 'victory spree';
    let defeat = 'defeat';
    let defeatRow = 'defeat in a row';
    let defeatReset = 'defeat spree';
    let lastResult = undefined;
    let victoriesCounter = 0;
    let defeatsCounter = 0;
    let lp = 0;
    let firstRank = 'Unranked';
    let actualRank = firstRank;
    let rank = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Legend', 'Hero', 'Immortal', 'Divine'];

// Match looping while match number's less than ranked matches declaration
    while (matchNumber < rankedMatches) {

// Random match formation (0-99)
        let randomMatch = Math.floor(Math.random() * 100);

// If the random result of 'randomMatch' is less or equal than 49 for League Points calculator
        switch (true) {
            case (randomMatch <= 49):
                switch (lastResult) {
                    case (undefined):
                        matchNumber++;
                        lastResult = victory;
                        victoriesCounter++;
                        lp += 10;
                        break;
                    case (victory):
                        matchNumber++;
                        lastResult = victoryRow;
                        victoriesCounter++;
                        lp += 15;
                        break;
                    case (victoryRow):
                        matchNumber++;
                        lastResult = victoryReset;
                        victoriesCounter++;
                        lp += 30;
                        break;
                    case (victoryReset):
                        matchNumber++;
                        lastResult = undefined;
                        victoriesCounter++;
                        lp = 100;
                        break;
                }
                break;
//If the random result of 'randomMatch' is greater or equal than 50 for League Points calculator
            case (randomMatch >= 50):
                switch (lastResult) {
                    case (undefined):
                        matchNumber++;
                        lastResult = defeat;
                        defeatsCounter++;
                        lp -= 5;
                        break;
                    case (defeat):
                        matchNumber++;
                        lastResult = defeatRow;
                        defeatsCounter++;
                        lp -= 10;
                        break;
                    case (defeatRow):
                        matchNumber++;
                        lastResult = defeatReset;
                        defeatsCounter++;
                        lp -= 20;
                        break;
                    case (defeatReset):
                        matchNumber++;
                        lastResult = undefined;
                        defeatsCounter++;
                        lp = 0;
                        break;
                }
                break;
        }   

// Defining a rank if League Points is greater than 100
        switch (true) {
            case (lp > 100):
                switch (actualRank) {
                    case (actualRank = firstRank):
                        actualRank = rank[0];
                        lp = 0
                        break;
                    case (actualRank = rank[0]):
                        actualRank = rank[1];
                        lp = 0
                        break;
                    case (actualRank = rank[1]):
                        actualRank = rank[2];
                        lp = 0
                        break;
                    case (actualRank = rank[2]):
                        actualRank = rank[3];
                        lp = 0
                        break;
                    case (actualRank = rank[3]):
                        actualRank = rank[4];
                        lp = 0
                        break;
                    case (actualRank = rank[4]):
                        actualRank = rank[5];
                        break;
                    case (actualRank = rank[5]):
                        actualRank = rank[6];
                        lp = 0
                        break;
                    case (actualRank = rank[6]):
                        actualRank = rank[7];
                        lp = 0
                        break;
                    case (actualRank = rank[7]):
                        actualRank = rank[8];
                        lp = 0
                        break;
                    case (actualRank = rank[8]):
                        actualRank = rank[9];
                        lp = 0
                        break;
                }
                break;
// Definig a rank if League Points is less than 0
            case (lp < 0):
                switch (actualRank) {
                    case (actualRank = rank[9]):
                        actualRank = rank[8];
                        lp = 0
                        break;
                    case (actualRank = rank[8]):
                        actualRank = rank[7];
                        lp = 0
                        break;
                    case (actualRank = rank[7]):
                        actualRank = rank[6];
                        lp = 0
                        break;
                    case (actualRank = rank[6]):
                        actualRank = rank[5];
                        lp = 0
                        break;
                    case (actualRank = rank[5]):
                        actualRank = rank[4];
                        lp = 0
                        break;
                    case (actualRank = rank[4]):
                        actualRank = rank[3];
                        lp = 0
                        break;
                    case (actualRank = rank[3]):
                        actualRank = rank[2];
                        lp = 0
                        break;
                    case (actualRank = rank[2]):
                        actualRank = rank[1];
                        lp = 0
                        break;
                    case (actualRank = rank[1]):
                        actualRank = rank[0];
                        lp = 0
                        break;
                }
                break;
        }
    }

// Function values return
    return {lp, victoriesCounter, defeatsCounter, lastResult, actualRank}
}

// League Rank Match Numbers
let finalResult = leagueRank (325);

// Output
console.log (`League Profile: `);
console.log (`Rank: ${finalResult.actualRank}`);
console.log (`League Points: ${finalResult.lp}`);
console.log (`Victories: ${finalResult.victoriesCounter}`);
console.log (`Defeats: ${finalResult.defeatsCounter}`);