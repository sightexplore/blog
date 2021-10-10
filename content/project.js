const category = {
    java: "Java",
    c: "C",
    cpp: "C++",
    py: "Python",
    web: "Web",
    sql: "SQL",
}


const project = [
    {
        id:1,
        category: category.web , name: "Bubble Sort",
        about: "Bubble Sort Visualization using ChatJS and jQuery",
        link:"https://codepen.io/sightexplore/pen/YzZoGVP"
    },

    {
        id:2,
        category: category.web , name: "Selection Sort",
        about: "Selection Sort Visualization using ChatJS and jQuery",
        link:"https://codepen.io/sightexplore/pen/WNpqGjE"
    },  

    {
        id:3,
        category: category.java , name: "Digital Number",
        about: "Using proportional logic to render a single digit in form of 5*5 pattern",
        link:"https://github.com/sightexplore/programming-codes/blob/main/Java/Pattern/DigitalNumber.java"
    },

    {
        id:4,
        category: category.java , name: "FLAMES",
        about: "Identify your Friends and Enemies using this game with easy to understand Logic and Implementations",
        link:"https://github.com/sightexplore/programming-codes/blob/main/Java/Project/FLAMES.java"
    },

    {
        id:5,
        category: category.java , name: "Password Generator",
        about: "Simple String manipulation Java Program to Encode and Decode a string",
        link:"https://github.com/sightexplore/programming-codes/blob/main/Java/StringManipulation/PasswordName.java"
    },

    {
        id:6,
        category: category.java , name: "Quiz App",
        about: "A customizable quiz able with any amount of question which is random in nature and also include positive and negative points.",
        link:"https://github.com/sightexplore/programming-codes/blob/main/Java/Project/QuizApp.java"
    },

    {
        id:7,
        category: category.cpp , name: "Todo List CLI",
        about: "A simple Multi-user todo list using CSV file operation",
        link:"https://github.com/sightexplore/programming-codes/tree/main/CPP/TodoLisi"
    },
  
    {
        id:8,
        category: category.web , name: "Flex: Justify Content",
        about: "A ReactJs application demonstrating CSS3 Flexbox: Justify Content",
        link:"https://2yubm.csb.app/"
    },

    {
        id:9,
        category: category.web , name: "Flex: Align Item",
        about: "A ReactJs application demonstrating CSS3 Flexbox: Align Item",
        link:"https://u5pxp.csb.app/"
    },
]


export default project
export { category }