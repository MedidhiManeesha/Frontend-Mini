function editRow(button) {
    var modal = document.getElementById('editModal');
    modal.style.display = 'block';
    // Row Records
    var row = button.parentNode.parentNode.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('age').value = parseInt(cells[1].textContent);
    document.getElementById('bornAt').value = cells[2].textContent;
    document.getElementById('birthdate').value = cells[3].textContent;
    // For image input
    var photoInput = document.getElementById('photo');
    document.getElementById('wife').value = cells[5].textContent;
    document.getElementById('weight').value = parseFloat(cells[6].textContent);
    document.getElementById('hasChildren').value = cells[7].textContent === 'Yes' ? 'true' : 'false';
    document.getElementById('hasGreyHair').value = cells[8].textContent === 'Yes' ? 'true' : 'false';
    document.getElementById('children').value = cells[9].textContent;
}

function saveChanges() {
    var modal = document.getElementById('editModal');
    modal.style.display = 'none';

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var bornAt = document.getElementById('bornAt').value;
    var birthdate = document.getElementById('birthdate').value;
    var photoInput = document.getElementById('photo');
    var wife = document.getElementById('wife').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var hasChildren = document.getElementById('hasChildren').value;
    var hasGreyHair = document.getElementById('hasGreyHair').value;
    var children = document.getElementById('children').value;

    // Create a new row
    var table = document.getElementById('tableBody');
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${bornAt}</td>
        <td>${birthdate}</td>
        <td><img src="${URL.createObjectURL(photoInput.files[0])}" alt="Photo" width="100" height="100"></td>
        <td>${wife}</td>
        <td>${weight}</td>
        <td>${hasChildren === 'true' ? 'Yes' : 'No'}</td>
        <td>${hasGreyHair === 'true' ? 'Yes' : 'No'}</td>
        <td>${children}</td>
        <td>
            <div class="dropdown">
                <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="bi bi-three-dots-vertical"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" onclick="editRow(this)">Edit</a>
                    <a class="dropdown-item" href="#" onclick="deleteRow(this)">Delete</a>
                </div>
            </div>
        </td>
    `;

    table.appendChild(newRow);
}

function closeModal() {
    var modal = document.getElementById('editModal');
    modal.style.display = 'none';
}

function deleteRow(button) {
    var row = button.parentNode.parentNode.parentNode.parentNode;
    var table = document.getElementById('tableBody');
    table.removeChild(row);
}
