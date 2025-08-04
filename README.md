# ALX Project 0x05 Setup - Next.js Image Generation App

A comprehensive Next.js application for AI-powered image generation using GPT-4 API, showcasing progressive development from basic setup to advanced features.

## 📁 Project Structure

This repository contains multiple iterations of the image generation app, each building upon the previous version:

```bash
alx-project-0x05-setup/
├── alx-project-0x07/          # Basic Next.js setup with components
├── alx-project-0x08/          # State management implementation
├── alx-project-0x09/          # API integration with environment variables
├── alx-project-0x11/          # Image tracking and gallery features
└── alx-project-0x13/          # Custom hooks implementation
```

## 🚀 Project Versions

### alx-project-0x07 - Foundation

- **Objective**: Basic Next.js application setup
- **Features**:
  - Layout components (Header, Footer, Layout)
  - TypeScript interfaces
  - Tailwind CSS styling
  - Component-based architecture

### alx-project-0x08 - State Management

- **Objective**: Implement React state for dynamic interactions
- **Features**:
  - State management for prompt input
  - Loading states
  - Image display components
  - Form handling

### alx-project-0x09 - API Integration

- **Objective**: Connect to external API for image generation
- **Features**:
  - Environment variable configuration
  - API route implementation
  - GPT-4 integration via RapidAPI
  - Error handling
  - Secure API key management

### alx-project-0x11 - Image Tracking

- **Objective**: Track and display generated images
- **Features**:
  - Generated images collection
  - Responsive grid layout
  - Image thumbnail gallery
  - Click-to-view functionality
  - Persistent image storage during session

### alx-project-0x13 - Custom Hooks

- **Objective**: Refactor with custom React hooks for better code organization
- **Features**:
  - `useFetchData` custom hook
  - Reusable API logic
  - Cleaner component architecture
  - TypeScript generics for type safety
  - Improved maintainability

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API**: GPT-4 via RapidAPI
- **Package Manager**: npm

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- RapidAPI account with GPT-4 access

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/alx-project-0x05-setup.git
   cd alx-project-0x05-setup
   ```

2. **Choose a project version** (e.g., alx-project-0x13 for the latest)

   ```bash
   cd alx-project-0x13
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**

   ```bash
   # Create .env.local file
   echo 'NEXT_PUBLIC_GPT_API_KEY="your_rapidapi_key_here"' > .env.local
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open in browser**

   ```bash
   http://localhost:3000
   ```

## 🔧 Configuration

### Environment Variables

Each project requires a `.env.local` file with your RapidAPI key:

```env
NEXT_PUBLIC_GPT_API_KEY="your_rapidapi_key_here"
```

### API Endpoint

The application uses the ChatGPT-42 RapidAPI endpoint:

- **URL**: `https://chatgpt-42.p.rapidapi.com/texttoimage`
- **Method**: POST
- **Headers**:
  - `x-rapidapi-key`: Your API key
  - `x-rapidapi-host`: chatgpt-42.p.rapidapi.com
  - `Content-Type`: application/json

## 📚 Key Features

### Image Generation

- Text-to-image generation using AI
- Customizable prompts
- 512x512 pixel output
- Real-time loading states

### User Interface

- Responsive design
- Clean, modern interface
- Interactive image gallery
- Mobile-friendly layout

### Code Architecture

- TypeScript for type safety
- Component-based structure
- Custom hooks for reusability
- Proper error handling
- Environment-based configuration

## 🔄 Development Progression

Each project version demonstrates different concepts:

1. **0x07**: Component architecture and styling
2. **0x08**: State management and user interaction
3. **0x09**: API integration and external services
4. **0x11**: Data persistence and UI enhancements
5. **0x13**: Code organization and custom hooks

## 📖 Usage

1. **Enter a prompt**: Describe the image you want to generate
2. **Click "Generate Image"**: The app will call the API
3. **View the result**: Generated image appears below
4. **Browse gallery**: Previous images are stored in a grid
5. **Click thumbnails**: View any previous image in full size

## 🚨 Important Notes

- **API Key Security**: Never commit your API keys to version control
- **Rate Limiting**: Be mindful of API usage limits
- **Environment**: Each project version has its own dependencies
- **Development**: Use appropriate ports to avoid conflicts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the ALX Software Engineering program.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [RapidAPI Platform](https://rapidapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Created as part of ALX Software Engineering Program - Project 0x05
