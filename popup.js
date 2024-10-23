// popup.js
document.getElementById('salaryForm').addEventListener('submit', submitData);

function submitData(e) {
  e.preventDefault();

  // Get form values
  const jobTitle = document.getElementById('jobTitle').value;
  const salary = document.getElementById('salary').value;
  const experience = document.getElementById('experience').value;
  const gender = document.getElementById('gender').value;

  // Add data to Firebase Firestore
  db.collection("salaries").add({
    jobTitle: jobTitle,
    salary: Number(salary),
    experience: Number(experience),
    gender: gender,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    document.getElementById('result').innerText = "Data submitted successfully!";
  })
  .catch(error => {
    document.getElementById('result').innerText = "Error: " + error.message;
  });

  // Clear form
  document.getElementById('salaryForm').reset();
}
