
import app from "./app";
import "./db";
import * as dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT;
console.log(port)
app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
