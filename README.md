# 🌍 AI Travel Planner

An intelligent travel planning application that leverages AI to create personalized travel itineraries. Built with React, Node.js, and Google's Gemini AI, this app helps users plan their perfect trips with smart recommendations for hotels, places to visit, and activities.

# 👇 Click for Live Demo

[![Interior Website Preview](https://github.com/user-attachments/assets/4ca286dd-9657-4108-bf11-8aa61a57c31b)](https://ai-travel-planner-frontend-three.vercel.app)

## ✨ Features

- **AI-Powered Itinerary Generation**: Uses Google Gemini AI to create personalized travel plans
- **Google Places Integration**: Real-time place suggestions and information
- **User Authentication**: Secure Google OAuth integration
- **Trip Management**: Save, view, and manage your travel plans
- **Interactive Chatbot**: Get instant travel assistance and recommendations
- **Responsive Design**: Modern UI with Tailwind CSS and Radix UI components
- **Dark/Light Mode**: Theme toggle for better user experience
- **Hotel Recommendations**: AI-curated hotel suggestions based on your preferences
- **Places to Visit**: Detailed recommendations for attractions and activities
- **Trip Sharing**: Share your itineraries with friends and family
- **Feedback System**: Rate and review your travel experiences

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - High-quality UI primitives
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Next Themes** - Dark mode support

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Google Gemini AI** - AI-powered content generation
- **CORS** - Cross-origin resource sharing

### APIs & Services
- **Google Places API** - Location data and suggestions
- **Google OAuth** - User authentication
- **Firebase** - Database and hosting
- **EmailJS** - Email service integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Cloud Platform account
- Firebase account

### Environment Variables

Create a `.env.local` file in the Frontend directory with the following variables:

```bash
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key
VITE_GOOGLE_GEMINI_AI__API_KEY=your_gemini_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_BACKEND_URL="http://localhost:5000"
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bagga-10/AI-Travel-Planner.git
   cd ai-travel-planner
   ```

2. **Install Frontend dependencies**
   ```bash
   cd Frontend
   npm install
   ```

3. **Install Backend dependencies**
   ```bash
   cd ../Backend
   npm install
   ```

4. **Set up environment variables**
   - Copy the environment variables to your `.env.local` file
   - Replace placeholder values with your actual API keys

### Running the Application

1. **Start the Backend server**
   ```bash
   cd Backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend development server**
   ```bash
   cd Frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
ai-travel-planner/
├── Backend/
│   ├── package.json
│   ├── server.js
│   └── vercel.json
├── Frontend/
│   ├── public/
│   │   ├── favicon.png
│   │   ├── logo.svg
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   └── custom/       # Custom app components
│   │   ├── constants/        # App constants and options
│   │   ├── create-trip/      # Trip creation flow
│   │   ├── my-trips/         # User trips management
│   │   ├── view-trip/        # Trip viewing interface
│   │   ├── service/          # API services and configs
│   │   └── lib/              # Utility functions
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔧 Configuration

### Google Cloud Setup

1. **Enable APIs**
   - Google Places API
   - Google Gemini AI API
   - Google OAuth 2.0 API

2. **Create OAuth Credentials**
   - Go to Google Cloud Console
   - Create OAuth 2.0 Client ID
   - Add authorized origins and redirect URIs

### Firebase Setup

1. Create a new Firebase project
2. Enable Authentication with Google provider
3. Set up Firestore database
4. Get your Firebase configuration

## 🎯 Usage

1. **Sign In**: Use Google OAuth to authenticate
2. **Create Trip**: Enter destination, travel dates, budget, and preferences
3. **AI Generation**: Let the AI create your personalized itinerary
4. **Customize**: Modify recommendations to suit your needs
5. **Save & Share**: Save your trip and share with others
6. **Get Help**: Use the chatbot for instant travel assistance


## 🙏 Acknowledgments

- Google Gemini AI for intelligent content generation
- Google Places API for location data
- Radix UI for beautiful components
- Tailwind CSS for styling
- The React community for excellent tools and libraries

**Happy Traveling! ✈️🌎**
