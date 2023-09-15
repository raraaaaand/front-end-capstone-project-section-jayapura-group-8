const orderForm = document.getElementById("orderForm");

//Function untuk add row dalam table items yang ingin dibeli user
function addRow() {
  const tableBody = document.querySelector("tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>
      <select class="select-product-ordered" name="product_ordered" class="form-control">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
        <option value="grape">Grape</option>
        <option value="orange">Orange</option>
        <option value="buahbuahbuahbuahhhh">buahbuahbuahbuahhhh</option>
      </select>
    </td>
    <td>
      <input class="form-control" type="number" name="quantity"
        required oninvalid="this.setCustomValidity('Data yang diisikan belum lengkap, silahkan lengkapi terlebih dahulu')" oninput="setCustomValidity('')">
    </td>
    <td>
      <button class="btn btn-danger" onclick="deleteRow(this)">-</button>
    </td>
  `;

  tableBody.appendChild(newRow);
}

// Function untuk delete row dari table items yang ingin dibeli user
function deleteRow(button) {
  const tableRow = button.parentElement.parentElement;
  tableRow.remove();
}

// Function untuk handle submisi form (ketika user klik tombol checkout)
function handleSubmit(event) {
  event.preventDefault(); // mencegah default form submission

  // memasukan personal info yang dimasukkan user ke dalam "personalInfo"
  const personalInfo = {
    firstName: document.getElementById("id_first_name").value,
    lastName: document.getElementById("id_last_name").value,
    email: document.getElementById("id_email").value,
    phoneNumber: document.getElementById("id_phone_number").value,
    address: document.getElementById("id_address").value,
    country: document.getElementById("id_country").value,
    city: document.getElementById("id_city").value,
    zip: document.getElementById("id_zip").value,
  };

  // memasukan items yang dipilih user ke dalam "items"
  const itemsTable = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];
  const items = [];
  for (let i = 0; i < itemsTable.rows.length; i++) {
    const productName = itemsTable.rows[i].cells[0].querySelector("select").value;
    const quantity = itemsTable.rows[i].cells[1].querySelector("input").value;
    items.push({ productName, quantity });
  }

  //order object
  const order = {
    personalInfo,
    items,
  };

  // Log order pada console
  console.log(order);

  // Redirect ke home page
//   window.location.href = 'index.html';
}

// event handler untuk submit form
orderForm.addEventListener("submit", handleSubmit);