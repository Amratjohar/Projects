document.addEventListener("DOMContentLoaded", function() {
    const billingForm = document.getElementById("billingForm");
    const billsContainer = document.getElementById("billsContainer");
    

    billingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const patientName = document.getElementById("patientName").value;
        const dob = document.getElementById("dob").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const ddob = document.getElementById("ddob").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        const bill = {
            patientName: patientName,
            dob: dob,
            phone: phone,
            address: address,
            ddob: ddob,
            amount: amount
        };

        createBill(bill);
        billingForm.reset();
    });

    function createBill(bill) {
        let bills = JSON.parse(localStorage.getItem("bills")) || [];
        bills.push(bill);
        localStorage.setItem("bills", JSON.stringify(bills));
        displayBills();
    }

    function displayBills() {
        billsContainer.innerHTML = "";
        const bills = JSON.parse(localStorage.getItem("bills")) || [];
        bills.forEach(function(bill, index) {
            const billElement = document.createElement("div");
            billElement.classList.add("bill");
            billElement.innerHTML = `
                <p><strong>Patient Name:</strong> ${bill.patientName}</p>
                <p><strong>Date of Admit:</strong> ${bill.dob}</p>
                <p><strong>Phone Number:</strong> ${bill.phone}</p>
                <p><strong>Address:</strong> ${bill.address}</p>
                <p><strong>Date of Discharge:</strong> ${bill.ddob}</p>
                <p><strong>Amount:</strong> $${bill.amount.toFixed(2)}</p>
                <button class="delete-btn">Delete</button>
                <button class="print-btn">Print</button>
            `;
            billsContainer.appendChild(billElement);
        });
    }

    billsContainer.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("delete-btn")) {
            const index = Array.from(target.parentNode.parentNode.children).indexOf(target.parentNode);
            deleteBill(index);
        } else if (target.classList.contains("print-btn")) {
            const index = Array.from(target.parentNode.parentNode.children).indexOf(target.parentNode);
            printBill(index);
        }
    });

    function deleteBill(index) {
        let bills = JSON.parse(localStorage.getItem("bills")) || [];
        bills.splice(index, 1);
        localStorage.setItem("bills", JSON.stringify(bills));
        displayBills();
    }

    function printBill(index) {
        const bills = JSON.parse(localStorage.getItem("bills")) || [];
        const bill = bills[index];

        const printContent = `
            <div class="bill">
                <p><strong>Patient Name:</strong> ${bill.patientName}</p>
               
                <p><strong>Date of Admit:</strong> ${bill.dob}</p>
                <p><strong>Phone Number:</strong> ${bill.phone}</p>
                <p><strong>Address:</strong> ${bill.address}</p>
                <p><strong>Date of Discharge:</strong> ${bill.ddob}</p>
                <p><strong>Amount:</strong> $${bill.amount.toFixed(2)}</p>
            </div>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Bill Invoice</title><link rel="stylesheet" href="styles.css"></head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('<script>window.onload = function() { window.print(); window.close(); }</script>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
    }

    displayBills();
});

