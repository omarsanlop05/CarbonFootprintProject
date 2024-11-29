# CarbonFootprintProject
Semester project on "Carbon Footprint" calculator
By: Omar Sanchez, Kenzo Matoo & Alexis Vargas

# Overview:
The Carbon Footprint Project is designed as a web-based tool that allows users to calculate their personal carbon footprint based on daily activities such as transportation, energy consumption, diet, and waste management. The primary goal of this project is to raise awareness of carbon emissions and inspire behavioral changes towards sustainable practices.

# Scope:
The project targets individual users interested in understanding their environmental impact. It covers several emission sources:
- Transportation emissions (car, public transport, flights)
- Household emissions (electricity, natural gas, heating)
- Diet-related emissions (meat consumption, vegetarian or vegan diets)
- Waste management and recycling practices

# Architecture:
The project backend is built using Node.js and Express to create an efficient server that manages routes, forms, and views rendered using EJS templates. The modular structure ensures each function is separated, simplifying maintenance and facilitating testing. Calculations for carbon footprint are encapsulated in a separate module (`carbonCalculations.js`), enhancing modularity and maintainability. The frontend interface is managed using CSS, and EJS templates to ensure a dynamic and interactive user experience as well as some Bootstrap elements. The page also uses MongoDB to store the forms sent by users.

# Functionalities:
Key functionalities of the project include:
- Real-time carbon footprint calculation based on user input
- Modular breakdown of emissions from transport, household, diet, and waste
- Dynamic rendering of results using EJS templates
- Database storing

# Justification of Design Choices:
The decision to use Node.js with Express was made to leverage the framework’s ability to manage routes and serve dynamic content effectively. Separating the calculation logic into `carbonCalculations.js` ensures easier debugging and future extensions. EJS was selected for rendering templates to provide a smooth, dynamic user experience. We aimed to create a better user experience (UX) through a simple and intuitive interface. Many carbon calculators are overly complex and hard to navigate. In contrast, our design guides users seamlessly to a detailed breakdown of their emissions upon completing the form.

# Conclusion:
The Carbon Footprint Project aims to empower individuals with the knowledge to understand and reduce their environmental impact. Through a modular backend and a user-friendly frontend, the tool provides meaningful insights into everyday activities. Future developments could include data visualization, personalized recommendations, and further enhancements for an even better user experience.

# Publication:
The project is available via GitHut pages: https://omarsanlop05.github.io/CarbonFootprintProject/
And Render: https://carbon-footprint-project.onrender.com
