#!/usr/bin/env node

import chalk from "chalk";
import gradient, { rainbow } from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";

let PlayerName;
let Score = 0;
const TOTAL_QUESTIONS = 5; // Number of questions to ask per game

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));
console.clear();

async function Welcome() {
    const title = chalkAnimation.glitch("🎉 EMOJI QUEST! 🎉",0.5);   
    await sleep();
    title.stop();    
    const gameTitle = chalkAnimation.rainbow("🎮 The Ultimate Emoji Challenge 🎮\n");
    await sleep();
    gameTitle.stop();

    console.log(`
    ${chalk.bgCyan.black(' HOW TO PLAY ')}
    ${chalk.cyan('•')} You'll face ${TOTAL_QUESTIONS} random emoji combinations
    ${chalk.cyan('•')} Each correct answer earns you ${chalk.green('20 points')}
    ${chalk.cyan('•')} Get any question wrong and... ${chalk.bgRed(' GAME OVER ')}
    ${chalk.cyan('•')} Reach ${chalk.yellow((TOTAL_QUESTIONS * 20))} points to win! 🏆
    `);
}

async function askName() {
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: chalk.yellow('👾 What shall we call you, brave challenger?'),
        default() {
            return 'Skibidi';
        },
    });
    PlayerName = answer.player_name;
}

const questions = [
    {
        emoji: '🔥🥷',
        choices: ['Fire Fighter', 'Dragon Ninja', 'Ninja Hatori'],
        correct: 'Fire Fighter'
    },
    {
        emoji: '🌊🏃',
        choices: ['Wave Runner', 'Beach Sprint', 'Water Chase'],
        correct: 'Wave Runner'
    },
    {
        emoji: '🎵🧠',
        choices: ['Music Mind', 'Brain Beats', 'Sound Think'],
        correct: 'Brain Beats'
    },
    {
        emoji: '🌟👨‍🚀',
        choices: ['Star Walker', 'Space Captain', 'Cosmic Man'],
        correct: 'Star Walker'
    },
    {
        emoji: '🎨🦋',
        choices: ['Art Flutter', 'Paint Wings', 'Butterfly Design'],
        correct: 'Paint Wings'
    },
    {
        emoji: '🌙🐺',
        choices: ['Night Wolf', 'Moon Hunter', 'Lunar Howl'],
        correct: 'Moon Hunter'
    },
    {
        emoji: '⚡🧙‍♂️',
        choices: ['Lightning Wizard', 'Storm Mage', 'Thunder Spell'],
        correct: 'Storm Mage'
    },
    {
        emoji: '🎮🧟',
        choices: ['Game Over', 'Zombie Player', 'Digital Undead'],
        correct: 'Zombie Player'
    },
    {
        emoji: '🌈🦄',
        choices: ['Color Horse', 'Rainbow Unicorn', 'Magic Pony'],
        correct: 'Rainbow Unicorn'
    },
    {
        emoji: '🍜👻',
        choices: ['Noodle Spirit', 'Ramen Ghost', 'Haunted Bowl'],
        correct: 'Ramen Ghost'
    },
    {
        emoji: '🎪🤖',
        choices: ['Circus Bot', 'Robot Show', 'Mechanical Carnival'],
        correct: 'Circus Bot'
    },
    {
        emoji: '🏰🐉',
        choices: ['Castle Drake', 'Dragon Keep', 'Royal Wings'],
        correct: 'Dragon Keep'
    },
    {
        emoji: '🎭🎪',
        choices: ['Circus Drama', 'Theater Tent', 'Festival Mask'],
        correct: 'Theater Tent'
    },
    {
        emoji: '🌋🏃‍♂️',
        choices: ['Lava Runner', 'Volcano Escape', 'Heat Sprint'],
        correct: 'Volcano Escape'
    },
    {
        emoji: '🎩🐰',
        choices: ['Magic Rabbit', 'Hat Trick', 'Wonder Bunny'],
        correct: 'Hat Trick'
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function askQuestion(questionData) {
    const answers = await inquirer.prompt({
        name: 'question',
        type: 'list',
        message: chalk.cyan(`Question ${Score/20 + 1}/${TOTAL_QUESTIONS}: What does this emoji combo mean: ${questionData.emoji}`),
        choices: shuffleArray([...questionData.choices]) // Shuffle the choices too
    });
    return handleAnswer(answers.question === questionData.correct);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('🤔 Analyzing your answer...').start();
    await sleep();
    
    if (isCorrect) {
        Score += 20;
        spinner.success({
            text: `${chalk.green('🎯 CORRECT!')} ${PlayerName}, you've earned 20 points! Total: ${chalk.yellow(Score)} points`
        });
    } else {
        spinner.error({
            text: `${chalk.red('💥 GAME OVER!')} Sorry, ${PlayerName}! Final Score: ${chalk.yellow(Score)} points`
        });
        console.log("Ok bie 💀 💀 💀")
        process.exit(1);
    }
}

function Winner() {
    console.clear();
    const msg = `${PlayerName}  WON!`;
    
    figlet(msg, (err, data) => {
        console.log(gradient.rainbow.multiline(data));
        console.log(`\n${chalk.green('🌟 Congratulations on conquering the Emoji Quest! 🌟')}\n`);
        console.log("Ok bie 💀 💀 💀")
    });
    
}

// Main game flow
await Welcome();
await askName();

// Get random questions
const gameQuestions = shuffleArray([...questions]).slice(0, TOTAL_QUESTIONS);

for (const question of gameQuestions) {
    await askQuestion(question);
    await sleep(1000);
}

Winner();