# **VistaNest**  
VistaNest is a full-stack web application that allows users to create, view, edit, and delete property listings, as well as leave reviews for these listings. It is designed to provide a seamless experience for users to showcase and browse vacation homes, rentals, or other accommodations, with geolocation, image upload, and user authentication features.

---

## **Features**  

### **User Authentication**  
- Sign up, log in, and log out functionality.  
- Password authentication using **Passport.js** and **passport-local-mongoose**.  
- Secure user sessions with flash messages for user feedback.  

### **Listings**  
- Users can:  
  - Create new listings with attributes like title, description, price, location, country, and an image.  
  - Edit or delete their listings.  
- Listings have geolocation features integrated with **Mapbox** for displaying locations on a map.  

### **Reviews**  
- Logged-in users can leave a review with a rating and comment.  
- Only review authors can delete their reviews.  

### **Image Uploads**  
- Images for listings are uploaded and managed through **Cloudinary**.  
- Images are resized and optimized for performance.  

### **Geolocation**  
- Locations are geocoded using **Mapbox APIs** to provide latitude and longitude data for listings.  
- Maps display the exact location of each listing.  

### **Responsive Design**  
- Built with **Bootstrap** for responsive and mobile-friendly design.  

---

## **Technologies Used**  

### **Backend**  
- **Node.js** and **Express.js** for server-side logic.  
- **MongoDB (Atlas)** for database management, with **Mongoose** as the ODM.  
- **Cloudinary** for file uploads and storage.  
- **Mapbox** for geolocation and mapping.  

### **Middleware**  
- **connect-mongo** for session storage.  
- **method-override** for HTTP verb support.  
- **connect-flash** for flash messages.  

### **Frontend**  
- **EJS templating engine** for rendering dynamic views.  
- **Bootstrap** for styling and responsiveness.  

### **Authentication & Security**  
- **Passport.js** for user authentication.  
- Sessions and cookies are securely managed.  

---

## **Setup Instructions**  

### **Prerequisites**  
1. **Node.js** installed on your machine.  
2. A **MongoDB Atlas** account for database setup.  
3. A **Cloudinary** account for image storage.  
4. A **Mapbox** account for geolocation services.
   

### **Folder Structure**  
VistaNest/  
├── public/                # Static files (CSS, JS, images)  
├── views/                 # EJS templates  
├── routes/                # Route definitions  
├── models/                # Mongoose schemas  
├── controller/            # Controller logic  
├── utils/                 # Utility modules  
├── .env                   # Environment variables  
├── app.js                 # Main application file  
└── README.md              # Documentation  


### **Environment Variables**  
Create a `.env` file in the root of your project and include the following variables:  

```env
CLOUD_NAME=your_cloudinary_cloud_name  
CLOUD_API_KEY=your_cloudinary_api_key  
CLOUD_API_SECRET=your_cloudinary_api_secret  
MAP_TOKEN=your_mapbox_access_token  
ATLAS_URL=your_mongodb_atlas_url
