# 🎬 Movies App - Angular 20 with Server-Side Rendering# MoviesApp



A modern, feature-rich Angular application built with **Angular 20** that allows users to browse movies and TV shows, search, filter by genres, and view detailed information using **The Movie Database (TMDB) API**.This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.



## ✨ Features## Development server



### 🎥 Movies & TV ShowsTo start a local development server, run:

- Browse popular movies and TV shows

- View detailed information (release date, rating, runtime, revenue, etc.)```bash

- Display cast and crew informationng serve

- Watch embedded trailers and videos```

- Browse movie and TV show images/backdrops

- Find similar movies and TV showsOnce the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.



### 🔍 Search & Filter## Code scaffolding

- Real-time search for movies and TV shows

- Filter by genres (Action, Comedy, Drama, etc.)Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

- Pagination support for browsing results

- Dynamic genre listings```bash

ng generate component component-name

### 📱 User Interface```

- Responsive design with PrimeNG components

- Tabbed interface for organized information displayFor a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

- Image carousel for cast and backdrops

- Modern styling with SCSS```bash

- Clean, intuitive navigationng generate --help

```

### ⚡ Performance & SEO

- **Server-Side Rendering (SSR)** for improved SEO and performance## Building

- Fast initial page loads

- Optimized bundle sizesTo build the project run:

- Production-ready build configuration

```bash

## 🛠️ Technology Stackng build

```

### Frontend Framework

- **Angular 20** - Latest stable version with standalone componentsThis will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

- **TypeScript** - Strongly typed JavaScript

- **RxJS** - Reactive programming with Observables## Running unit tests

- **Angular Router** - Client-side routing

- **Angular Forms** - Form handling with FormsModuleTo execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:



### UI Components```bash

- **PrimeNG 20.3** - Enterprise-grade UI component libraryng test

- **PrimeFlex** - CSS utility framework```

- **PrimeIcons** - Icon library

- **SCSS** - Advanced styling with variables and mixins## Running end-to-end tests



### Backend & HostingFor end-to-end (e2e) testing, run:

- **Express.js** - Node.js web server for SSR

- **@angular/ssr** - Server-side rendering support```bash

- **Angular Platform Server** - Server-side compilationng e2e

```

### API Integration

- **The Movie Database (TMDB) API v3** - Movie and TV show dataAngular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

- **HttpClient** - HTTP requests to API endpoints

## Additional Resources

### Development Tools

- **Angular CLI 20.3.5** - Command-line toolsFor more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

- **Karma** - Testing framework
- **Jasmine** - Unit testing library

### Build & Deployment
- **Angular Build** - Optimized production builds
- **Node.js** - JavaScript runtime

## 📦 Key Dependencies

```json
{
  "@angular/core": "^20.3.0",
  "@angular/forms": "^20.3.0",
  "@angular/router": "^20.3.0",
  "@angular/platform-browser": "^20.3.0",
  "@angular/platform-server": "^20.3.0",
  "@angular/ssr": "^20.3.5",
  "primeng": "^20.3.0",
  "@primeuix/themes": "^1.2.5",
  "primeflex": "^4.0.0",
  "primeicons": "^7.0.0",
  "rxjs": "~7.8.0",
  "express": "^5.1.0",
  "zone.js": "~0.15.0"
}
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git**
- TMDB API Key (get it at [themoviedb.org](https://www.themoviedb.org/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alywebdesigner/Movies-App-Angular.git
   cd Movies-App-Angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   - Open `src/app/services/movies.ts`
   - Replace the API key:
   ```typescript
   apiKey: string = 'YOUR_TMDB_API_KEY';
   ```

4. **Also update TV Shows service**
   - Open `src/app/services/tvshows.ts`
   - Replace the API key there too

### Development Server

Run the development server:
```bash
npm start
```
or
```bash
ng serve
```

Navigate to `http://localhost:4300/`. The application will automatically reload if you change any of the source files.

### Production Build

Build for production:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Serve SSR Application

To run the server-side rendered application:
```bash
npm run serve:ssr:movies-app
```

This will start the Express server with SSR enabled.

## 📁 Project Structure

```
movies-app/
├── src/
│   ├── app/
│   │   ├── components/           # Reusable components
│   │   │   ├── item/            # Movie/TV show card component
│   │   │   ├── itemscards/      # Multiple cards display
│   │   │   ├── slider/          # Image carousel
│   │   │   └── video-embed/     # YouTube video embed
│   │   ├── pages/               # Page components
│   │   │   ├── home/            # Landing page
│   │   │   ├── movies/          # Movies listing & search
│   │   │   ├── movie/           # Movie detail page
│   │   │   ├── genres/          # Genres listing
│   │   │   └── tvshows/         # TV shows listing
│   │   ├── services/            # API services
│   │   │   ├── movies.ts        # Movies API service
│   │   │   └── tvshows.ts       # TV shows API service
│   │   ├── models/              # TypeScript interfaces
│   │   │   ├── movie.ts         # Movie data models
│   │   │   └── genre.ts         # Genre models
│   │   ├── shared/              # Shared components
│   │   │   ├── header/          # App header/navigation
│   │   │   └── footer/          # App footer
│   │   ├── constants/           # Application constants
│   │   ├── app.ts              # Root component
│   │   ├── app.routes.ts       # Route configuration
│   │   └── app.routes.server.ts # SSR route configuration
│   ├── styles/                  # Global styles
│   ├── main.ts                 # Bootstrap file
│   ├── main.server.ts          # SSR bootstrap
│   └── server.ts               # Express server setup
├── dist/                        # Production build output
├── angular.json                # Angular configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🔌 API Integration

### TMDB API Endpoints Used

The application uses the following TMDB API v3 endpoints:

- `/movie/{type}` - Get movies by type (upcoming, popular, top_rated)
- `/search/movie` - Search movies by query
- `/movie/{id}` - Get movie details
- `/movie/{id}/videos` - Get movie trailers/videos
- `/movie/{id}/images` - Get movie images/backdrops
- `/movie/{id}/credits` - Get cast and crew
- `/movie/{id}/similar` - Get similar movies
- `/discover/movie` - Discover movies with filters
- `/genre/movie/list` - Get all movie genres
- `/tv/{type}` - Get TV shows by type
- `/search/tv` - Search TV shows
- `/tv/{id}` - Get TV show details
- `/genre/tv/list` - Get TV show genres

## 🎨 Key Components

### Movie Card Component (`item`)
Displays individual movie/TV show cards with:
- Poster image
- Title
- Vote average (rating)
- Link to detail page

### Movie Detail Page
Shows comprehensive movie information:
- Overview tab with poster, ratings, and metadata
- Videos tab with embedded trailers
- Photos tab with image gallery
- Cast carousel with actor names and character names
- Similar movies recommendations

### Search & Filter
- Real-time search with debouncing
- Genre-based filtering with pagination
- Dynamic movie list updates

## 📊 Build Information

### Bundle Sizes (Production)
- Browser: ~1.32 MB (gzipped: ~230 KB)
- Server: ~1.36 MB
- Optimized with code splitting and lazy loading

### Performance
- Server-Side Rendering enabled
- Image optimization with responsive sizes
- Lazy loading for routes and components

## 🧪 Testing

Run unit tests:
```bash
npm test
```

Run tests with coverage:
```bash
ng test --code-coverage
```

## 📝 Code Style

- **TypeScript** - Strict mode enabled
- **SCSS** - Component-scoped styles
- **Prettier** - Code formatting
- **Angular Style Guide** - Best practices

## 🚢 Deployment

### Deploy to Vercel / Netlify / Firebase Hosting

1. Build the application
   ```bash
   ng build --configuration production
   ```

2. Deploy the `dist/movies-app` directory

### Deploy with SSR (Node.js Required)

1. Upload both `dist/movies-app/browser` and `dist/movies-app/server` folders
2. Install dependencies: `npm install`
3. Run SSR server: `npm run serve:ssr:movies-app`

## 🔗 Useful Links

- [Angular Documentation](https://angular.io/docs)
- [PrimeNG Documentation](https://primeng.org/)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
- [RxJS Documentation](https://rxjs.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Aly Web Designer**
- GitHub: [@alywebdesigner](https://github.com/alywebdesigner)
- Repository: [Movies-App-Angular](https://github.com/alywebdesigner/Movies-App-Angular)

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📞 Support

If you encounter any issues or have questions:
1. Check the [GitHub Issues](https://github.com/alywebdesigner/Movies-App-Angular/issues)
2. Review existing documentation
3. Create a new issue with detailed description

## 🎯 Future Enhancements

- [ ] User authentication and favorites list
- [ ] Movie ratings and reviews
- [ ] Watch list functionality
- [ ] User profile page
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Advanced filtering options
- [ ] Movie recommendations based on watchlist

---

**Last Updated:** December 28, 2025

**Angular Version:** 20.3.0  
**Node Version Required:** 18+  
**Status:** ✅ Production Ready
