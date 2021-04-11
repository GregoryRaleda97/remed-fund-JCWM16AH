let product = [{
    no: 1,
    barang: "Coca Cola",
    price: 5000,
    category: "drink",
},
{
    no: 2,
    barang: "Beng Beng",
    price: 4500,
    category: "food",
},
{
    no: 3,
    barang: "Fanta",
    price: 3500,
    category: "drink",
},
];

function showTable(number) {
    if (number) {
        let listEdit = product.map((el) => {
            if (el.no == number) {
                return `
                <tr>
                <td>#</td>
                <td><input type="text" value="${el.barang}" id="editBarang"></td>
                <td><input type="number" value="${el.price} id="editPrice"></td>
                <td>
                <select name="category" id="editCategory">
                    <option value="food">food</option>
                    <option value="drink">drink</option>
                    <option value="others">others</option>
                </select>
                </td>
                <td><button onClick="save(${el.no})">SAVE</button> <button onclick="cancel()">CANCEL</button> </td>
                </tr>
                `;
            }else{
                return `
                <tr>
                <td>${el.no}</td>
                <td>${el.barang}</td>
                <td>${el.price}</td>
                <td>${el.category}</td>
                <td><button onclick="editBarang(${el.no})">EDIT</button> <button onclick="deleteBarang(${el.no})">DELETE</button></td>
                </tr>
                `;
            }
        });
        document.getElementById("renderTable").innerHTML = listEdit.join("");
    }else{
        let list = product.map((el)=>{
            return`
            <tr>
            <td>${el.no}</td>
            <td>${el.barang}</td>
            <td>${el.price}</td>
            <td>${el.category}</td>
            <td><button onclick="editBarang(${el.no})">EDIT</button> <button onclick="deleteBarang(${el.no})">DELETE</button></td>
            </tr>
            `;
        });

        document.getElementById("renderTable").innerHTML = list.join("");
    }
}

function deleteBarang(no){
    product = product.filter((el)=>{
        return el.no !== no;
    });

    showTable();
}

function editBarang(no){
    showTable(no);
}

function cancel(){
    showTable();
}

function save(number){
    let index = product.findIndex((el)=> el.no == number);
    let barang = document.getElementById("editInputBarang").value;
    let price = document.getElementById("editInputHarga").value;
    let category = document.getElementById("editCategory").value;

    product[index] = {
        ...product[index],
        barang,
        price,
        category,
    };
    showTable();
}

function addBarang(e){
    e.preventDefault();
    let barang = document.getElementById("inputBarang").value;
    let price = document.getElementById("inputPrice").value;
    let category = document.getElementById("inputCategory").value;
    let no = product.length + 1;

    if (!barang){
        alert("tolong isi barang");
    }else if(!price){
        alert("tolong isi harga");
    }else if(!category){
        alert("tolong isi category");
    }else{
        product.push({
            no,
            barang,
            price,
            category,
        });

        document.getElementById("inputBarang").value="";
        document.getElementById("inputPrice").value="";

        showTable();
    }
}

showTable();