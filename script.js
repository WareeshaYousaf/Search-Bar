let avail_suggestions = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "How to Earn online",
  "How to study online",
  "Web Development Course",
  "Online Earning Source",
];
let suggest_box = document.querySelector(".suggestion_box");
function handleKeyUp(event) {
  let result = [];
  let input = event.target.value.toLowerCase();
  if (input.length) {
    result = avail_suggestions.filter((keyword) => {
      return keyword.toLowerCase().includes(input);
    });
    console.log(result);
  }
  display(result);
  console.log(input);
}

function display(result) {
  let content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  suggest_box.innerHTML = "<ul>" + content.join("") + "</ul>";
}
function selectInput(list) {
  document.getElementById("input_box").value = list.innerHTML; // Update input box value directly
  document.querySelector(".suggestion_box").innerHTML = ""; // Clear suggestion box after selecting
}
