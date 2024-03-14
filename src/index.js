
document.querySelector("#create-task-form").addEventListener("submit", event => {
  event.preventDefault();
  console.log("The form was submitted");
  const submittedDescription = document.querySelector("#new-task-description").value;
  console.log(submittedDescription);
 
});

const input = document.querySelector("input[type='search']");
input.addEventListener("search", event => {
  console.log(`The term searched for was ${input.value}`);

});

const input2 = document.querySelector('input[type="search"]');

input2.onsearch = () => {
  console.log(`The term searched for was ${input2.value}`);

};
