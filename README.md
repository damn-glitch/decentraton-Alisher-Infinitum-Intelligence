Alisher Beisembekov
Decentrathon 2.0
19.10.24
Features
Talent Marketplace & Freelance: Connects employers with potential candidates and freelancers.
Outsourcing & Employer of Record (EOR): Facilitates outsourcing tasks and EOR services.
Talent Pool & Community Management: Manages a pool of talents and engages with the community.
Blockchain Integration: Uses smart contracts for secure transactions.
Telegram Mini App: Accessible directly within Telegram for ease of use.
AI Integration: Enhances recommendations and functionalities using AI algorithms.
Project Structure
project/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
├── smart-contracts/
│   ├── contracts/
│   │   ├── EmploymentContract.sol
│   │   └── HRPlatformToken.sol
│   ├── migrations/
│   ├── test/
│   ├── truffle-config.js
│   └── package.json
└── bot/
    ├── bot.py
    └── requirements.txt
backend/: Node.js server with Express.js, handles API endpoints, database interactions, and business logic.
frontend/: React.js application, serves the user interface and interacts with the backend and Telegram SDK.
smart-contracts/: Solidity contracts, manages blockchain interactions using Truffle framework.
bot/: Python script using Aiogram, handles Telegram bot functionalities and integrates the Web App.
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Python (v3.7 or higher)
pip (Python package manager)
Truffle (for smart contract development)
Ganache (local Ethereum blockchain)
MongoDB (for the backend database)
Metamask (browser extension for blockchain interactions)
Installation
Backend Setup
Navigate to the backend directory:

cd project/backend
Install dependencies:

npm install
Configure Environment Variables:

Create a .env file in the backend/ directory with the following content:

PORT=5000
MONGO_URI=mongodb://localhost:27017/hr-platform
JWT_SECRET=your_jwt_secret
Set up the database:

Ensure MongoDB is running locally on your machine.

Frontend Setup
Navigate to the frontend directory:


cd project/frontend
Install dependencies:


npm install
Configure Environment Variables:

Create a .env file in the frontend/ directory with the following content:

REACT_APP_BACKEND_URL=http://localhost:5000
Smart Contracts Setup
Navigate to the smart-contracts directory:

cd project/smart-contracts
Install dependencies:

npm install
Configure Truffle:

Ensure you have Truffle and Ganache installed.

Compile Contracts:

truffle compile
Migrate Contracts:

truffle migrate
Telegram Bot Setup
Navigate to the bot directory:

cd project/bot
Create a virtual environment (optional but recommended):

python -m venv venv
source venv/bin/activate  # On Windows use 'venv\Scripts\activate'
Install dependencies:

pip install -r requirements.txt
Configure Bot Token:

Replace 'YOUR_TELEGRAM_BOT_TOKEN' in bot.py with your actual bot token obtained from @BotFather.

Running the Application
Start the Backend Server
cd project/backend
node index.js
The backend server should now be running on http://localhost:5000.

Start the Frontend Application
cd project/frontend
npm start
The frontend should now be running on http://localhost:3000.

Start the Smart Contracts (Ganache and Truffle)
Start Ganache:

Open Ganache to run a local Ethereum blockchain.

Deploy Contracts:

cd project/smart-contracts
truffle migrate --reset
Start the Telegram Bot
cd project/bot
python bot.py
Interacting with the Application
Accessing the Web Application:

Open http://localhost:3000 in your web browser to interact with the frontend.

Using the Telegram Bot:

Open Telegram and find your bot using its username.
Start a conversation with /start.
Use /webapp to receive a button that opens the HR Platform inside Telegram.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
