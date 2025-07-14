import express from "express"
import cors from "cors"
import mongoSanitize from "express-mongo-sanitize"

const app = express()

// app.use((req, res, next) => {
//     console.log(`Received ${req.method} request to ${req.url}`);
//     console.log("Request Headers:", req.headers);
//     console.log("Request Body:", req.body);
//     next();
// });

app.use(cors({
    origin: [
      "http://localhost:3000/",
      "http://10.0.2.2:3000/"       
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));

  // Handle OPTIONS preflight requests
  app.options("*", cors());


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

// Security middleware to prevent NoSQL injection attacks
app.use(mongoSanitize({
    allowDots: true, // Allow dots in keys
    replaceWith: '_'
}))

//routes import
import userRouter from './routes/user.routes.js'
import exerciseRouter from "./routes/exercise.routes.js"
import cookieParser from "cookie-parser"
import diyRouter from "./routes/diy.routes.js"
import onboardingRouter from "./routes/onBoarding.routes.js"
import dietRouter from "./routes/diet.routes.js"
import creditRouter from "./routes/credit.routes.js"
import lifestyleRouter from "./routes/lifeStyle.routes.js"
import focusRouter from "./routes/focusMode.routes.js"

//routes declaration
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Arthlete API"
    });
});

app.use("/api/v1/users", userRouter)
app.use("/api/v1/diet", dietRouter)
app.use("/api/v1/exercise", exerciseRouter)
app.use("/api/v1/diy", diyRouter)
app.use("/api/v1/onboarding", onboardingRouter)
app.use("/api/v1/lifestyle", lifestyleRouter)
app.use("/api/v1/credit", creditRouter)
app.use("/api/v1/focus", focusRouter)

export { app }