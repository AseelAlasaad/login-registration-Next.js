const DB_URL="mongodb+srv://aseel:XfNaBEiBnxnM5AkO@cluster0.z9hew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const API= process.env.NODE_ENV === "production"? "http://xxx:3000/api": "http://localhost:3000/api"
module.exports={
    DB_URL,
    API
}

