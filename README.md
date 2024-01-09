## FlickFix

[FlickFix](https://flickfix-gamma.vercel.app/) is a movie recommendation application built with Next.js, Zustand, and Shadcn/UI. It provides users with top-rated movies and allows them to add their favorite movies to a cart. The application fetches data from a movie database using axios and displays it in a user-friendly interface. Users can view detailed information about each movie and rate them according to their preference. The application also supports real-time updates and state management.

### Features

* **Top-rated Movies:** FlickFix provides a list of top-rated movies for users to browse through.
* **Detailed Movie Information:** Each movie comes with detailed information, including ratings, reviews, and a synopsis.
* **Add to Cart:** Users can add their favorite movies to a cart for easy access and review later.
* **Real-time Updates:** The application supports real-time updates, ensuring users always have the latest information.
* **State Management:** FlickFix uses Zustand for state management, providing a seamless user experience.

### Getting Started

1. Clone the repository or download the zip file.
2. Install the dependencies: `npm install`
3. Configure your TMDB by adding your api key to `.env` files (see `.gitignore` for excluded ones).
4. Run the development server: `npm run dev`
5. Open <http://localhost:3000> in your browser to see the app running.

### Resources

* **Zustand:** [https://github.com/pmndrs/zustand](https://github.com/pmndrs/zustand)
* **Shadcn/UI:** [https://github.com/shadcn-ui/ui](https://github.com/shadcn-ui/ui)
* **Next.js:** [https://nextjs.org/](https://nextjs.org/)
* **Tanstack Query:** [https://tanstack.com/query/](https://tanstack.com/query/)
