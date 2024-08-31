import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

// app.get("/about", (req, res) => {
// 	res.send("<h1>About Me</h1>");
// 	res.send("<p>I am a software developer with 10 years of experience</p>");
// });

app.get("/about", (req, res) => {
	const data = {
		firstName: "John",
		lastName: "Andrew",
	};
	res.render("about-me.ejs", data);
});

app.get("/customers", (req, res) => {
	const customers = [
		{
			firstName: "John",
			lastName: "Andrew",
		},
		{
			firstName: "David",
			lastName: "Andrew",
		},
		{
			firstName: "Felix",
			lastName: "Andrew",
		},
	];
	res.render("customers-list.ejs", { customers });
});

app.listen(3000, () => {
	console.log("Server started at port number 3000");
});
