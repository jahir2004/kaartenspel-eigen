# Laravel Blackjack Game

## Overview
This project is a fully functional Blackjack game built with Laravel and React. It features:

- **Backend**: Laravel handles game logic, session management, and API endpoints.
- **Frontend**: React provides a dynamic UI with smooth animations using Framer Motion.
- **Assets**: Kenney Playing Cards for realistic card visuals.

## Features
- **Game Logic**:
  - Start a new game.
  - Hit to draw a card.
  - Stand to let the dealer play.
  - Calculate scores and determine the winner.
- **UI**:
  - Animated card flips.
  - Buttons for game actions.
  - Centered layout with responsive design.
- **Session Management**:
  - Game state is stored in Laravel sessions.

## Installation

### Prerequisites
- PHP >= 8.2
- Node.js >= 16
- Composer
- SQLite (or another database driver)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kaartenspel
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

4. Set up the `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update the database and app settings as needed.

5. Generate the application key:
   ```bash
   php artisan key:generate
   ```

6. Run migrations:
   ```bash
   php artisan migrate
   ```

7. Start the development servers:
   ```bash
   php artisan serve
   npm run dev
   ```

## Usage
1. Open the game in your browser:
   ```
   http://127.0.0.1:8000/blackjack
   ```
2. Use the buttons to play:
   - **Start Game**: Begin a new round.
   - **Hit**: Draw a card.
   - **Stand**: Let the dealer play.

## Project Structure
- **Backend**:
  - `app/Models`: Contains `Card`, `Deck`, and `BlackjackGame` models.
  - `app/Http/Controllers`: Contains `BlackjackController` for game logic.
  - `routes/web.php`: Defines routes for the game and API.
- **Frontend**:
  - `resources/js/components`: Contains React components (`Blackjack.tsx`, `Card.tsx`).
  - `resources/views`: Blade templates for loading React.
- **Assets**:
  - `public/cards`: Kenney Playing Cards.

## Credits
- **Kenney.nl**: Playing card assets.
- **Laravel**: Backend framework.
- **React**: Frontend library.
- **Framer Motion**: Animation library.

## License
This project is open-source and available under the [MIT License](LICENSE).