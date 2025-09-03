# MyApp - React Native Image Gallery & Filter App

A cross-platform mobile application built with React Native that allows users to browse their device gallery, apply filters to images, and upload them to Firebase Cloud Storage.

## 🚀 Features

### Core Functionality
- **Image Gallery Browser**: Browse and select images from device gallery with permission handling
- **Single/Multi-Select**: Toggle between single and multiple image selection modes
- **Real-time Image Filters**: Apply various filters to images before upload:
  - Original (no filter)
  - Greyscale
  - Sepia
  - Invert
  - Contrast
- **Firebase Integration**: Secure image upload to Firebase Cloud Storage with progress tracking
- **Anonymous Authentication**: Automatic Firebase anonymous authentication
- **Metadata Support**: Add descriptions and filter information to uploaded images

### Technical Features
- **Cross-platform**: Runs on both iOS and Android
- **Modern Architecture**: Built with Redux Toolkit for state management
- **Internationalization**: Multi-language support (English/French) with i18next
- **Theme Support**: Light/dark theme switching capabilities
- **TypeScript**: Full TypeScript support for type safety
- **Testing**: Comprehensive test setup with Jest and React Native Testing Library

## 📱 Screenshots & User Flow

1. **Image Gallery Screen**: Browse device photos with single/multi-select options
2. **Filter & Upload Screen**: Apply filters, add descriptions, and upload to cloud storage
3. **Progress Tracking**: Real-time upload progress with visual indicators

## 🛠 Tech Stack

### Frontend
- **React Native** (0.80.2) - Cross-platform mobile framework
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management
- **React Navigation** - Navigation and routing
- **React Query** - Server state management

### UI & Styling
- **react-native-color-matrix-image-filters** - Real-time image filtering
- **react-native-progress** - Progress indicators
- **react-native-svg** - Vector graphics support
- **react-native-safe-area-context** - Safe area handling

### Backend & Services
- **Firebase Authentication** - Anonymous user authentication
- **Firebase Cloud Storage** - Image storage and management
- **Firebase Firestore** - (Configured, ready for metadata storage)

### Development Tools
- **ESLint** - Code linting with comprehensive rules
- **Prettier** - Code formatting
- **Jest** - Unit testing framework
- **Reactotron** - Development debugging tool

## 📋 Prerequisites

- **Node.js** >= 20.12
- **React Native CLI**
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)
- **Firebase Project** with Storage and Authentication enabled

## 🚀 Getting Started

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd MyApp
yarn install
```

### 2. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication (Anonymous sign-in)
3. Enable Cloud Storage
4. Download configuration files:
   - `google-services.json` for Android (place in `android/app/`)
   - `GoogleService-Info.plist` for iOS (add to Xcode project)

### 3. iOS Setup

```bash
cd ios
pod install
cd ..
```

### 4. Run the Application

#### iOS
```bash
yarn ios
```

#### Android
```bash
yarn android
```

#### Development Server
```bash
yarn start
```

## 🧪 Development Commands

```bash
# Linting
yarn lint              # Run all linting checks
yarn lint:fix          # Fix linting issues automatically

# Testing
yarn test              # Run tests
yarn test:report       # Generate coverage report

# Type Checking
yarn lint:type-check   # TypeScript type checking
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Component combinations
│   ├── organisms/      # Complex components
│   └── templates/      # Page layouts
├── hooks/              # Custom React hooks
├── navigation/         # Navigation configuration
├── redux/              # State management
├── screens/            # Application screens
├── services/           # API and external services
├── theme/              # Theming and styling
├── translations/       # Internationalization
└── utils/              # Utility functions
```

## 🔧 Key Components

### State Management
- **imageSlices**: Manages selected images state
- **uploadSlice**: Handles upload progress, status, and errors

### Services
- **uploadImages**: Core service for uploading images to Firebase Storage with progress tracking
- **permission**: Handles device permission requests

### Screens
- **ImageGallery**: Main gallery browser with selection capabilities
- **FilterUploadScreen**: Filter application and upload interface

## 🌐 Internationalization

The app supports multiple languages:
- English (en-EN)
- French (fr-FR)

Add new languages by creating translation files in `src/translations/`.

## 🎨 Theming

The app includes a comprehensive theming system supporting:
- Light/Dark themes
- Custom color schemes
- Responsive typography
- Consistent spacing and layout

## 📱 Permissions

The app requires the following permissions:
- **Photo Library Access**: To browse and select images from device gallery

## 🔒 Security

- **Firebase Rules**: Configure appropriate security rules for Storage and Firestore
- **Anonymous Authentication**: Users are automatically signed in anonymously
- **Type Safety**: Full TypeScript implementation for runtime safety

## 🚀 Deployment

### Android
```bash
cd android
./gradlew assembleRelease
```

### iOS
1. Open `ios/MyApp.xcworkspace` in Xcode
2. Select your team and signing certificate
3. Archive and upload to App Store Connect

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `yarn start --reset-cache`
2. **iOS build issues**: Clean build folder and reinstall pods
3. **Android build issues**: Clean gradle with `cd android && ./gradlew clean`
4. **Permission issues**: Ensure proper permissions are configured in platform-specific files

### Firebase Issues
- Verify `google-services.json` and `GoogleService-Info.plist` are properly configured
- Check Firebase project settings and rules
- Ensure Storage and Authentication services are enabled

## 📞 Support

For technical support or questions, please check the troubleshooting section or create an issue in the repository.

---

Built with ❤️ using React Native and Firebase
