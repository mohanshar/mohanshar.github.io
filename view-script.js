document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const symbol = document.getElementById('searchSymbol').value;
  const dob = document.getElementById('searchDOB').value;

  db.collection("students")
    .where("symbol", "==", symbol)
    .where("dob", "==", dob)
    .get()
    .then(snapshot => {
      const resultDiv = document.getElementById('resultDisplay');
      resultDiv.innerHTML = '';

      if (snapshot.empty) {
        resultDiv.innerHTML = `<p style="color:red;">No result found!</p>`;
        return;
      }

      snapshot.forEach(doc => {
        const student = doc.data();
        let html = `<h3>Grade Sheet</h3>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Symbol No:</strong> ${student.symbol}</p>
        <p><strong>Date of Birth:</strong> ${student.dob}</p>
        <table border="1"><tr><th>Subject</th><th>Grade</th></tr>`;

        student.results.forEach(r => {
          html += `<tr><td>${r.subject}</td><td>${r.grade}</td></tr>`;
        });

        html += '</table>';
        resultDiv.innerHTML = html;
      });
    });
});

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const content = document.getElementById('resultDisplay').innerText;
  doc.text(content, 10, 10);
  doc.save("result.pdf");
}