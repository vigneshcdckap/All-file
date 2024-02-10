let person1=prompt("Stone,Paper or Scissor");
let person2=prompt("Stone,Paper or Scissor");
person1=person1.toLowerCase()
person2=person2.toLowerCase()
if (person1,person2) {

if (person1 == "stone" && person2 == "paper" || person1 == "paper" && person2 == "scissor" || person1 == "scissor" && person2 == "stone") {
    alert("Person 2 is the winner")
}
else if(person1 == "stone" && person2 == "scissor" || person1 == "paper" && person2 == "stone" || person1 == "scissor" && person2 == "paper") {
    alert("Person 1 is the winner")
}
else{
    alert("Draw")
}
}
else{
    alert("You did not give any value")
}