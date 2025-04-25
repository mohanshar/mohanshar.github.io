document.getElementById('gradeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const symbol = document.getElementById('symbol').value;
  const dob = document.getElementById('dob').value;
  const subjects = document.querySelectorAll('.subject');
  const grades = document.querySelectorAll('.grade');

  let results = [];
  for (let i = 0; i < subjects.length; i++) {
    results.push({
      subject: subjects[i].value,
      grade: grades[i].value
    });
  }

  db.collection("students").add({
    name,
    symbol,
    dob,
    results
  }).then(() => {
    alert("Grades submitted to Firebase!");
    document.getElementById('gradeForm').reset();
  }).catch(error => {
    alert("Error: " + error.message);
  });
});

function addSubject() {
  const div = document.createElement('div');
  div.innerHTML = '<input type="text" class="subject" placeholder="Subject Name"> <input type="text" class="grade" placeholder="Grade"><br>';
  document.getElementById('subjects').appendChild(div);
}