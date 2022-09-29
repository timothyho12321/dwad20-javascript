// optional arguments

function calculateNetBill(bill, gst=0.07) {
    return bill * (1 + gst);

}

console.log("Net bill for 100=", calculateNetBill(100))