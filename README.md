# Freesource Library

	https://freesourcelibrary.netlify.app/
	
	https://github.com/KayeB-Designing/freesourceLibrary-frontend

## Project Description

	Freesource Library, free resources for life.

	* Mission: 
	To culminate the highest quality free resources found online, in an organized and easy to use manner.
 
	* Vision: 
	Freesource Library is dedicated to providing access to the knowledge and tools needed to learn how to live.
	
	* Why is our mission and vision important?
	This site is meant to help others by providing access to the culmionated knowledge and tools they need to learn how to live the life they want to live.

##  User Stories & Wireframes

Users will enter application through the home page/index route. Index Route will show a header section and a main content section. Header is comprised of company/application logo name and slogan, as well as the nav bar. Main content section will display resource categories along with a short description of the category. Following the main content section users will see a "quote of the day" block followed by a footer with company information.

![Screenshot (531)](https://user-images.githubusercontent.com/98247684/168591120-4f956d7b-f60d-4e1a-8616-3cc4e31b48d3.png)

From the index route users have two options of where to go next, the "About" section using the link or the nav bar or to a resource list of a specified category. On the show route for the about section users will be able to learn more about the company/application before returning to the home/index route using the nav link. 

![Screenshot (533)](https://user-images.githubusercontent.com/98247684/168591624-9a5bad1d-7a01-4034-87bd-e3c2ecdb0e0a.png)

When users select a resource category they will be linked to the show route for the category. Users will then be able to see all available resources for that category along with a short description of that resource. From there users may either click the desired resource link and be directed to a 3rd party website to consume the resource or they may print off a PDF document containing the JSON data of each resource.

![Screenshot (532)](https://user-images.githubusercontent.com/98247684/168591875-beeda762-d900-49f6-82dd-039f88bf51b5.png)

Users will also have the ability, from any page, to get an extra quote of the day as a downloadable pdf that contains a QR code that can be scanned from anywhere and accesses the Freescource Library application.

### MVP

	* Fully functioning and deployed React Application.
	* Integrated API
	* Use React Dom and React Router to render various content without refreshing the page. 

## API- URL to PDF

	https://nocodeapi.com/docs/html2pdf-api

	* HTML to PDF API
	Seamless way to generate High quality PDFs of any webpages & HTML with API

	* URL to PDF
	Make GET request on this endpoint to url to pdf with required parameters(if any required).

	https://v1.nocodeapi.com/<username>/pdf/<token>/url2pdf

	* Test URL:
	https://www.google.com/search?q=free+resources&oq=Free+Res&aqs=chrome.1.69i57j35i39j0i433i512l3j0i512l2j0i433i512j0i512l2.5268j0j15&sourceid=chrome&ie=UTF-8
	
	
![Screenshot (535)](https://user-images.githubusercontent.com/98247684/168592141-fbd71fa3-39b2-493c-b325-7a63128bed34.png)
![Screenshot (537)](https://user-images.githubusercontent.com/98247684/168593319-2244b377-7bd9-4bc4-9dc5-2fb894d91229.png)

## API - Random Quote

	https://rapidapi.com/martin.svoboda/api/quotes15/
	
	* Get a Random Quote
	Free multilingual API for random famous quotes in many languages.

## Component Hierarchy

![Screenshot (536)](https://user-images.githubusercontent.com/98247684/168593570-8bcfc186-742c-4d0a-9e12-e9654a885ba6.png)

### Resource Data:

	* Resources will be compiled into JSON files with the following structures
	
	Categories List:
	[
		{
	  	"name": "Category 1 Name",
	  	"description": "This is where category description will go"
		},
		{
	  	"name": "Category 2 Name",
	  	"description": "This is where category description will go"
		},
		{
	  	"name": "Category 3 Name",
	  	"description": "This is where category description will go"
		}
	]

	Resource List:

	[
		{
		"qr": "https://www.qrcode.com/thisLink.format",
	  	"name": "Resource 1 Name",
	  	"description": "This is where category description will go",
		"email": "yes/no"
		},
		{
		"qr": "https://www.qrcode.com/thisLink.format",
	  	"name": "Resource 2 Name",
	  	"description": "This is where category description will go",
		"email": "yes/no"
		},
		{
		"qr": "https://www.qrcode.com/thisLink.format",
	  	"name": "Resource 3 Name",
	  	"description": "This is where category description will go",
		"email": "yes/no"
		}
	]

        About: 
        {
                "mission": "Freesource library mission",
                "vision": "Freesource library vision",
                "importance": "Why this is important & how it can help others",
                "how": "how this idea came about"
        }
	

## Design && Branding Concepts

	* Main concepts: 
	Trust | Authority | Growth | Generosity | Stability | Calm | Peace | Respect | Straightforward | Modern | Creativity | Enthusiasm | Friendliness
	
![Screenshot (565)](https://user-images.githubusercontent.com/98247684/169524660-62a6bfe8-7660-457a-a111-bd24073e6e0e.png)
![Screenshot (564)](https://user-images.githubusercontent.com/98247684/169524727-9cbb10a1-0ecb-4ba7-98c0-31ae423e7fbb.png)
![Screenshot (566)](https://user-images.githubusercontent.com/98247684/169524738-07595a75-59f8-40de-ad78-dded99583a16.png)
![Screenshot (567)](https://user-images.githubusercontent.com/98247684/169524747-a538b3fe-53c6-48e4-915a-4ddf419c1815.png)


## Technologies Used

	* CLI, Git, GitHub, Visual Studio Code, Node.js, React, Express, Cors, Heroku, Netlify, REST, HTML, CSS, JavaScript, JSON
	* Canva.com, Iloveimg.com, Imgbox.com, Gravit.io, Qr-code-generator.com, Coolors.co, Postimages.org

## Collaborators && Contributions

 	* Fork and Clone this Repo
	* Open Clone in your preferred program (I recommend VS Code as it is easy to work with and offers a lot of great extensions!)
	* Using the CLI create a developement branch with a name of your choice
	* Happy Helping!!!
	
	* To Make a Contribution simply create a pull request from your developement branch
	* I will review any pull requests and merge if applicable
	* Upon contribution approval your GitHub username, as well as a brief description of your work, will be added to a list of contributors within this README.MD
	
	** Any other non-technical contributions, including but not limited to free resource links, may be sent to Kaye.Bryant@KayeBDesigning.com 
	
### Additional Contribution Information

	* Absolutely every resource must meet the following criteria:
	1. Personally Vetted
		- I will be verifying all contributions so please make sure every link and resource is verified by yourself first
	2. Helpful and Informative
		- I know some topics that need addressed may cross the lines of what may be deemed family friendly but absolutely every resoure should be based on improving ones own life.
		- No nudity, violence, hate speech, or scientifically/medically disproven information.
		- Any materials aimed towards the recovery of survivors of the afformentioned topics are the only exception to these rules.
	3. Absolutely every resource must be free. Freemium is accpetable and can include: free with signup or free with ads.
		- Absolutely no submitted resource should ever required a user to pay to access the knowledge or tool it provides.
