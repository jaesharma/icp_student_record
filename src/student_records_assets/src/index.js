import { student_records } from "../../declarations/student_records";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with student_records actor, calling the greet method
  const greeting = await student_records.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
