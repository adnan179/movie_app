# MovieFlix

A Netflix-style movie database application built with React Native and Expo. This project serves as a practice project to learn React Native and Expo development.

## About

MovieFlix is a mobile application that allows users to browse trending movies, search for specific titles, view detailed information about movies, and save their favorites. The app provides a clean, intuitive interface similar to popular streaming platforms like Netflix.

## Features

- Browse trending movies
- Search for movies by title
- View detailed movie information
- Save favorite movies
- User profile management

## Screenshots

[Screenshots will be added here]

## Technologies Used

- **React Native**: Core framework for building the mobile application
- **Expo**: Development platform for React Native
- **NativeWind/TailwindCSS**: For styling components
- **React Navigation**: For navigation between screens
- **Expo Router**: For routing and navigation
- **Appwrite**: Backend services integration

## Dependencies

### Main Dependencies
- `expo` - v53.0.12
- `expo-router` - v5.1.0
- `react` - v19.0.0
- `react-native` - v0.79.4
- `@expo/vector-icons` - v14.1.0
- `@react-navigation/bottom-tabs` - v7.3.10
- `@react-navigation/native` - v7.1.6
- `nativewind` - v4.1.23
- `react-native-appwrite` - v0.10.0
- `expo-image` - v2.3.0
- `expo-blur` - v14.1.5
- `react-native-reanimated` - v3.17.4

### Dev Dependencies
- `typescript` - v5.8.3
- `tailwindcss` - v3.4.17
- `eslint` - v9.25.0

## Project Structure

```
movie_app/
├── app/                    # Main application screens
│   ├── (tabs)/             # Tab-based navigation screens
│   │   ├── index.tsx       # Home screen
│   │   ├── Search.tsx      # Search screen
│   │   ├── Saved.tsx       # Saved movies screen
│   │   └── Profile.tsx     # User profile screen
│   ├── movie/              # Movie details screens
│   │   └── [id].tsx        # Dynamic movie detail page
│   └── _layout.tsx         # Root layout component
├── components/             # Reusable UI components
│   ├── MovieCard.tsx       # Movie card component
│   ├── TrendingCard.tsx    # Trending movie card component
│   └── SearchBar.tsx       # Search bar component
├── constants/              # App constants and configuration
├── services/               # API and service integrations
│   ├── api.ts              # API service for movie data
│   ├── appwrite.ts         # Appwrite integration
│   └── useFetch.ts         # Custom fetch hook
├── assets/                 # Static assets (images, fonts)
├── interfaces/             # TypeScript interfaces
└── types/                  # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI
- Android Studio or Xcode (for emulators)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/movie_app.git
   cd movie_app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Follow the instructions in the terminal to open the app on your device or emulator

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
API_KEY=your_movie_api_key
APPWRITE_ENDPOINT=your_appwrite_endpoint
APPWRITE_PROJECT_ID=your_appwrite_project_id
```

## License

[Your License Here]

## Author

[Your Name]

---

This project was created as a learning exercise for React Native and Expo development.
