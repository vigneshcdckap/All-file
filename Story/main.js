let story= (prompt("Choose any one from the given year:2005,2020,2023"));
let person= null;
switch (story) {
    case "2005":
        person=("I have born this year October 21 ")
        break;
    case "2020":
         person=("In this year 9th annunal exam was conducted but suddenly corona comes and till 11th we had lockdown")
        break;
    case "2023":
        person=("In this year I have completed my twelth std and joined DCKAP Palli");     
        break;
    default:
     console.log("Choose the year");
}   
if (person !=null){
    console.log("Story :"+person)
    alert(person);
}                                                                                                                                