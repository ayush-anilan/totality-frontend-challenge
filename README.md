
# Property Listing Application

The Property Listing Application is a web-based platform that allows users to browse, filter, and book properties. Users can view property details, filter properties based on location, price, number of bedrooms, and amenities, and add selected properties to their cart for booking.


## Features

- **Property Listing**: Displays a list of properties with details such as title, description, image, price, location, and amenities.
- **Filtering**: Allows users to filter properties by location, price range, number of bedrooms, and amenities.
- **Booking Modal**: Users can select check-in and check-out dates and add properties to their cart.

## User Flow

- **View Properties**: Users see a list of properties with the option to filter based on various criteria.
- **Filter Properties**: Users can apply filters for location, price range, number of bedrooms, and amenities.
- **Select Property**: Clicking "Book Now" on a property opens a modal where users can enter booking details.
- **Add to Cart**: Users can add selected properties to their cart with specified check-in and check-out dates.

## Tech Stack

#### Frontend
- __React.js__: A JavaScript library for building user interfaces.
- __Chakra UI__: A React component library for building accessible and responsive UIs.
- __TypeScript__: A superset of JavaScript that adds static types.
- __React Router__: For handling routing within the application.

#### State Management
- React Context API: Used for managing global state such as the cart.

## Installation
To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/ayush-anilan/totality-frontend-challenge.git
2. Navigate to the project directory:
   ```bash
   cd totality-frontend-challenge 
   cd client
3. Install dependencies:
   ```bash
   npm install
4. Run the Application:
   ```bash
   npm run dev

The application will be accessible at http://localhost:5173.

## Screenshots
#### Home Page
[![Homepage.png](https://i.postimg.cc/tT5VNF6g/Homepage.png)](https://postimg.cc/MMnTWMdk)
#### Properties Page
[![properties.png](https://i.postimg.cc/wB5t9D0k/properties.png)](https://postimg.cc/sBXfcGFB)
#### Property Details Page
[![Property-details.png](https://i.postimg.cc/Y9bhWMcG/Property-details.png)](https://postimg.cc/vgxYRRZb)
#### Cart Page
[![Cart.png](https://i.postimg.cc/6qqTVgwH/Cart.png)](https://postimg.cc/BPWq4hjD)
#### Checkout Page
[![checkout.png](https://i.postimg.cc/8PFjj2Zc/checkout.png)](https://postimg.cc/kBmnHp3P)

## Live Preview:
https://totality-frontend-challenge-ten.vercel.app/

## Additional Notes
- __Responsive Design__: The application is designed to be responsive and works well on both desktop and mobile devices.
- __State Management__: React Context API is used for managing the cart state. This provides a simple way to manage global state across components

## Future Enhancements
- __User Authentication__: Implement user authentication and authorization.
- __Backend Integration__: Connect to a backend service to manage properties, bookings, and user data.
- __Search Functionality__: Add a search bar for users to quickly find properties by keywords.




