# Emoji Quest Game 🎮

Emoji Quest is an interactive command-line game designed for fun! 🎉 Challenge yourself to decode emoji combinations while enjoying vibrant terminal animations. No pressure—just pure fun! 😃

## Features

✨ **Interactive and visually appealing CLI interface**  
🤔 **Challenging emoji-based puzzles** that test your interpretation skills  
🏆 **Point-based scoring system** – earn 20 points per correct answer  
📊 **Progress tracking** – monitor your score  
🎉 **Engaging victory and game-over screens** with dynamic animations  

## Installation

```bash
# Install globally
npm install -g emoji-guess

# Or run directly using npx
npx emoji-guess
```

## Prerequisites

* Node.js (v14.0.0 or higher)
* npm (v6.0.0 or higher)

## How to Play

1. Start the game by running:
   ```bash
   npx emoji-guess
   ```
2. Enter your player name when prompted
3. Answer a series of emoji combination questions
4. Each correct answer earns you 20 points
5. Try to reach 100 points to win!
6. Be careful - one wrong answer ends the game!

## Dependencies

This game utilizes several Node.js packages to enhance the command-line experience:

- [**chalk**](https://github.com/chalk/chalk) – Adds vibrant colors to terminal output
- [**inquirer**](https://github.com/SBoudrias/Inquirer.js) – Handles interactive prompts
- [**gradient-string**](https://github.com/bokub/gradient-string) – Creates beautiful gradient text
- [**chalk-animation**](https://github.com/bokub/chalk-animation) – Adds animated text effects
- [**figlet**](https://github.com/patorjk/figlet.js) – Generates ASCII art text
- [**nanospinner**](https://github.com/usmanyunusov/nanospinner) – Displays stylish loading animations

### Installing Dependencies

To install all dependencies, run:
```bash
npm install chalk chalk-animation figlet gradient-string inquirer nanospinner
```

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ReVuZ/cli-game.git
   ```
2. Install dependencies:
   ```bash
   cd cli-game
   npm install
   ```

## Available Scripts

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  }
}
```

## Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

* GitHub: [@ReVuZ](https://github.com/ReVuZ)
* Twitter: [@RevathyMR](https://twitter.com/RevathyMR)

## Bug Reports

If you encounter any bugs or have suggestions for improvements, please report them via [GitHub Issues](https://github.com/ReVuZ/cli-game/issues).

## Upcoming Features

* Multiplayer mode
* Custom emoji combinations
* Difficulty levels
* Time-based challenges
* Global leaderboard

---
Made with ❤️ by [ReVuZ](https://github.com/ReVuZ)
