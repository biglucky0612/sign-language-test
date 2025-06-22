# Sign Language Translate - React.js Version

A React.js conversion of the [sign.mt](https://sign.mt/) project, providing effortless real-time sign language translation using cutting-edge AI technology.

## 🌟 Features

- **Real-time Translation**: Translate between spoken languages and sign languages instantly
- **Multi-language Support**: Support for multiple spoken and sign languages
- **Video Upload**: Upload sign language videos for translation
- **Camera Integration**: Use your device's camera for real-time translation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful, accessible interface with smooth animations
- **PWA Ready**: Progressive Web App capabilities for mobile installation

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sign_language
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Header.js       # Navigation header component
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Translate.js    # Main translation interface
│   └── About.js        # About page
├── services/           # API and external services
│   └── api.js          # API service functions
├── utils/              # Utility functions and constants
│   └── constants.js    # Application constants
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Built With

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Webcam** - Camera integration
- **React Dropzone** - File upload handling
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications

## 🌐 Supported Languages

### Spoken Languages
- English (en)
- German (de)
- French (fr)
- Spanish (es)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Chinese (zh)
- Japanese (ja)
- Korean (ko)

### Sign Languages
- American Sign Language (ASL)
- British Sign Language (BSL)
- International Sign Language (ISL)
- Australian Sign Language (Auslan)
- French Sign Language (LSF)
- German Sign Language (DGS)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://sign.mt
REACT_APP_VERSION=1.0.0
```

### API Configuration

The application is configured to work with the sign.mt API. Update the API configuration in `src/services/api.js` if needed.

## 📱 Usage

### Text Translation
1. Select source and target languages
2. Enter text in the input field
3. Click "Translate" to get the translation

### Video Translation
1. Upload a sign language video file
2. Select source and target languages
3. Click "Translate" to process the video

### Camera Translation
1. Click "Use Camera" to enable webcam
2. Position yourself in front of the camera
3. Perform sign language gestures
4. Click "Capture Image" to process

## 🎨 Customization

### Styling
The application uses Styled Components for styling. You can customize the theme by modifying the `UI_CONFIG` object in `src/utils/constants.js`.

### Adding New Languages
To add new languages, update the `SUPPORTED_LANGUAGES` object in `src/utils/constants.js`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0).

## 🙏 Acknowledgments

- Original sign.mt project by [Amit Moryossef](https://github.com/AmitMY)
- [sign/translate](https://github.com/sign/translate) repository
- The sign language community for feedback and support

## 📞 Support

- **Website**: [https://sign.mt](https://sign.mt)
- **GitHub**: [https://github.com/sign/translate](https://github.com/sign/translate)
- **Issues**: Report bugs and feature requests on GitHub

## 🔗 Related Links

- [Original Angular Project](https://github.com/sign/translate)
- [sign.mt Website](https://sign.mt)
- [Research Paper](https://arxiv.org/abs/2303.03265)

---

**Note**: This is a React.js conversion of the original Angular-based sign.mt project. The core functionality and design principles remain the same, but the implementation uses React.js and modern web technologies. 