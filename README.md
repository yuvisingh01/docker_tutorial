# Full Stack Application

A modern full-stack web application built with React and Express, containerized with Docker for easy deployment and development.

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

### Backend
- **Express 5** - Web framework
- **CORS** - Cross-origin resource sharing
- **Node.js 22** - Runtime environment

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
FullStack_0toprod/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   └── ...
│   ├── Dockerfile         # Frontend container configuration
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend application
│   ├── index.js           # Main server file
│   ├── Dockerfile         # Backend container configuration
│   └── package.json
├── docker-compose.yml     # Docker Compose configuration
└── README.md
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v22 or higher)
- **npm** (comes with Node.js)
- **Docker** and **Docker Compose** (for containerized deployment)

## 🛠️ Installation

### Option 1: Using Docker (Recommended)

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd FullStack_0toprod
   ```

2. **Build and start all services**:
   ```bash
   docker-compose up --build
   ```

   This will:
   - Build Docker images for both client and server
   - Start both containers
   - Set up the network between them

3. **Access the application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

### Option 2: Local Development

#### Backend Setup

1. **Navigate to the server directory**:
   ```bash
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

   The server will run on http://localhost:5000

#### Frontend Setup

1. **Navigate to the client directory** (in a new terminal):
   ```bash
   cd client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The frontend will run on http://localhost:5173

## 🐳 Docker Commands

### Build individual services

**Build the server image**:
```bash
cd server
docker build -t express-server .
```

**Build the client image**:
```bash
cd client
docker build -t react-client .
```

### Docker Compose

**Start services in detached mode**:
```bash
docker-compose up -d
```

**Stop services**:
```bash
docker-compose down
```

**View logs**:
```bash
docker-compose logs -f
```

**Rebuild and restart**:
```bash
docker-compose up --build
```

## 📡 API Endpoints

### GET `/api/message`
Returns a welcome message from the backend.

**Response**:
```json
{
  "message": "Hello from the backend server!"
}
```

## 🧪 Development

### Frontend Scripts
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm start` - Start the Express server

## 🏗️ Building for Production

### Frontend
The client Dockerfile uses a multi-stage build:
1. Builds the React application
2. Serves the static files using `serve`

### Backend
The server Dockerfile:
1. Installs dependencies
2. Runs the Express server

## 🔧 Configuration

### Ports
- **Frontend**: 5173 (development) / 3000 (Docker container)
- **Backend**: 5000

### CORS
The backend is configured to accept requests from:
- http://localhost:5173
- http://localhost:3000
- http://localhost:5174

## 📝 Notes

- The application uses a Docker bridge network (`app-network`) for inter-container communication
- Both containers are configured to restart unless stopped
- The backend listens on `0.0.0.0` to allow access from other containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

ISC

