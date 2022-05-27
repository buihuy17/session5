/** 
JSON.stringify(): convert sang string 
JSON.parse(): convert sang object 

*/

/** 
 Tạo 1 ứng dụng phoneList
-Người dùng nhập vào 4 chữ cái C,R,U,D
-C- cho người dùng nhập vào tên và sdt mới
  -check xem có tồn tại trong danh bạ chưa
  -nếu có rồi thì cho nhập lại tên và nhập sđt
  -nếu chưa có thì nhập tiếp sdt mới vào
  -Sau đấy in ra toàn bộ contact theo dạng "name-phone"

-R -- In ra toàn bộ contact theo dạng "name-phone"

-U --Cho người dùng nhập vào tên cần update
   --Check xem có thấy trong danh bạ k
   -nếu có tiến hành update sdt
   -Sau đấy in ra oàn bộ contact theo dạng "name - phone"

D -- Cho người dùng nhập vào tên contact muốn xoá
   -- Check xem có tìm thấy contact không
   -- Nếu có tiến hành xoá
   -- Nếu không thì in ra không tồn tại contact này trong danh bạ
   -- * Sau đấy in ra toàn bộ contact theo dạng "name - phone"
 SAU KHI HOÀN THÀNH LOGIC biến bài toán thành vòng lặp vĩnh cửu
 đến khi người dùng nhập "E" - exit thì mới thoát khỏi bài toán
*/

let phoneList = [
  {
    name: "Peter",
    phone: "012345678",
  },
  {
    name: "Tony",
    phone: "033388888",
  },
  {
    name: "Steve",
    phone: "045345678",
  },
];

function readAllContact() {
  phoneList.forEach(function (e, i) {
    console.log(`${e.name} - ${e.phone}`);
  });
}

//check name
function ifExisted(name) {
  let findIndex = phoneList.findIndex(function (el) {
    return el.name === name;
  });
  return findIndex;
}

let input = prompt("what do you want(C,R,U,D)").toUpperCase();
//Create
if (input === "C") {
  let name = prompt("Enter name");
  let findIndex = ifExisted(name);
  if (findIndex < 0) {
    let phone = prompt("Enter phone");
    let contact = {
      name,
      phone,
    };
    phoneList.push(contact);
    readAllContact();
  } else console.log("Contact already");
}

//Read
else if (input == "R") {
  readAllContact();
}

//Update
else if (input == "U") {
  let name = prompt("Enter name");
  //check if name in phoneList
  let findIndex = ifExisted(name);
  if (findIndex < 0) {
    console.log("Contact doesn't exist in phone list");
  } else {
    let phone = prompt("Enter updated phone");
    phoneList[findIndex].phone = phone;
    readAllContact();
  }
}

//Delete
else if (input == "D") {
  let name = prompt("Enter name");
  //check if name
  let findIndex = ifExisted(name);
  if (findIndex < 0) console.log("Contact doesn't exist in phone list");
  else {
    //logic delete
    let phone = prompt("Please enter delete phone");
    phoneList.splice(1, findIndex);
    readAllContact();
  }
}
