// Hàm generarreID
export function generateId() {
    let idStart = 0;
    //   Kiểm tra xem đã có dữ liệu trong LocalStorage chưa, nếu có thì lấy giá trị id lớn nhất của
    // listAccount để làm id bắt đầu
    if (localStorage && localStorage.getItem("listProduct")) {
        let listAccount = JSON.parse(localStorage.getItem("listProduct"));

        listAccount.forEach((account) => {
            if (account.id > idStart) {
                idStart = account.id;
            }
        });
    }


    let id = idStart + 1;


    return id;
}