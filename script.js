
document.addEventListener('DOMContentLoaded', () => {
     fetch('evielas.json')
         .then(response => response.json())
            .then(data => {
            const tableBody = document.getElementById('table-body');
             data.forEach(substance => {
                 const row = document.createElement('tr');
                  row.innerHTML = `
                     <td class="Izcelti">${substance.skaitlis}</td>
                     <td>${substance.nosaukums}</td>
                     <td class="Izcelti">${substance.kastasir}</td>
                     <td>${substance.komentārs}</td>
                  `;
                  tableBody.appendChild(row);
              });
          })
          .catch(error => console.error('Error loading JSON:', error));
   });

function Mekle() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("SearchBox");
  filter = input.value.toUpperCase();
  table = document.getElementById("Evielu-TabulaS");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "table-row";
      } else {
        tr[i].style.display = "none";
        }
      }
    }
 }
 
 function Mekle2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("SearchBox");
  filter = input.value.toUpperCase();
  table = document.getElementById("Evielu-TabulaN");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "table-row";
      } else {
        tr[i].style.display = "none";
        }
      }
    }
 }
