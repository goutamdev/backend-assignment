# 📦 Backend Assignment – MVC Project with Express.js

This is a demo backend project using Node.js and Express.js that demonstrates:
- File/folder structure following MVC pattern
- GET and POST API endpoints
- Static frontend with navigation and form
- Integration with HTML + CSS styled like a mini e-commerce site

---

## 📁 Folder Structure

```plaintext
backend-assignment/
├── app.js
├── controllers/
│   └── messageController.js
├── models/
│   └── messageModel.js
├── routes/
│   └── messageRoutes.js
├── public/
│   ├── home.html
│   ├── about.html
│   ├── signup.html
│   ├── css/
│   │   └── style.css
```

---

## 🚀 How It Works

### API Endpoints:

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | /api/message   | Returns "I am get request."  |
| POST   | /api/message   | Returns "I am post request." |

- Visiting **Home**, **About**, or **Signup** page triggers a **GET** request.
- Submitting the **signup form** triggers a **POST** request.

All API responses and logs are visible in Postman or terminal.

---

## 🛠 How to Run

```bash
# Step 1: Clone or download the project
cd backend-assignment

# Step 2: Install dependencies
npm install

# Step 3: Run the server
node app.js
```

Then open:
- http://localhost:3000/home.html
- http://localhost:3000/about.html
- http://localhost:3000/signup.html

---

## 📬 Output Preview

- On page load → Console/terminal shows: **I am get request.**
- On form submit → Console/terminal shows: **I am post request.**

---

## ✅ Requirements Covered

- [x] Complete file/folder structure
- [x] GET request returning "I am get request."
- [x] POST request returning "I am post request."
- [x] Used controller, model, route, and frontend UI

---

## 📄 License

This project is open-source and created for educational purposes.
