# Aurum Wallet

A digital wallet application for the Stellar network, built with React Native and Expo.


## Open Source Project

Aurum Wallet is an open-source project aimed at providing a secure, easy-to-use mobile wallet for the Stellar blockchain network. We welcome contributions from developers of all skill levels!

## Description

Aurum Wallet is a mobile application that allows users to manage their assets on the Stellar network. With an intuitive and secure interface, users can:

- Create and manage Stellar wallets
- Send and receive payments
- Check balances and transaction history
- Manage custom tokens and assets
- Keep private keys secure with encrypted storage

## Technologies Used

- [React Native](https://reactnative.dev/) - Framework for mobile application development
- [Expo](https://expo.dev/) - Platform for simplifying React Native development
- [Stellar SDK](https://stellar.org/) - SDK for interacting with the Stellar network
- [Redux](https://redux.js.org/) - Application state management
- [React Navigation](https://reactnavigation.org/) - Screen navigation
- [React Native Paper](https://reactnativepaper.com/) - UI components
- [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/) - Secure storage for sensitive data

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.0 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

**Note about Expo CLI**: As of Expo SDK 48+, you no longer need to install the Expo CLI globally. The necessary Expo commands are now included in the project dependencies and can be run using `npx` or through the npm scripts defined in package.json.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aurum-wallet.git
   cd aurum-wallet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Running the App

After starting the development server with `npm start`, you have several options:

### Using Emulators/Simulators

- **iOS Simulator** (macOS only):
  - Install Xcode from the Mac App Store
  - Open Xcode and install additional required components if prompted
  - Start the iOS Simulator through Xcode or by pressing `i` in the terminal after running `npm start`
  - The app will automatically install and launch in the simulator

- **Android Emulator**:
  - Install [Android Studio](https://developer.android.com/studio)
  - Set up an Android Virtual Device (AVD) through the AVD Manager in Android Studio
  - Start your AVD from Android Studio or through the command line
  - Press `a` in the terminal after running `npm start` to launch the app in the emulator

### Using Your Physical Device

No emulator is needed! You can run the app directly on your physical device:

1. Install the Expo Go app on your device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Make sure your phone is on the same Wi-Fi network as your development computer

3. After running `npm start`, you'll see a QR code in the terminal

4. Scan the QR code:
   - **iOS**: Use your camera app to scan the QR code
   - **Android**: Open Expo Go and use the "Scan QR Code" option

The app will load and run directly on your device without needing to install any additional software on your phone.

## Project Structure

```
aurum-wallet/
├── assets/               # App images and icons
├── App.tsx               # Main application component
├── index.ts              # Entry point
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Development

### Setting Up Expo

You can develop and test Aurum Wallet without creating an Expo account, but having one allows you to build and publish your app more easily.

1. (Optional) Create an Expo account at [expo.dev](https://expo.dev/signup)

2. (Optional) Login to Expo using npx:
   ```bash
   npx expo login
   ```

Note that for basic local development and testing, neither the Expo CLI installation nor an Expo account is strictly necessary. You can run all commands using `npx expo` instead of a globally installed Expo CLI.

### Building for Production

To create a production build:

1. For Android:
   ```bash
   expo build:android
   ```

2. For iOS:
   ```bash
   expo build:ios
   ```

You can also use EAS Build for more advanced build configurations:
```bash
npm install -g eas-cli
eas build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Stellar Development Foundation](https://www.stellar.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)

## Contact

[Telegram Contributors](t.me/aurumWallet) 
