// Này dùng in ra nhưng phía trong
console.log("Hello world");

// ALert in ra màn hình

// Tại sao người ta dùng console để in thông tin nhiều hơn?
// Vì là để check cái nào hiện trước hiện sau

let name = "Tuan"; //this is variable

// js is case-sensitive. có phân biệt hoa thường
/**
 * Khối lệnh địa phương
 *
 * Và sử dụng let nhiều hơn là dùng var
 */

let Name = "Hoang";

console.log("name: " + name + " Name:" + Name);

let x = 10;
console.log("x: " + x);
let y = 3;
// lưu ý ko đặt tên biến là con số

console.log(x ** 3); //Power: số mũ

if (1 == 1) {
    let z = 133;
}

//if này luôn đúng, nên sẽ chạy vào gán vào z = 133

// Nhưng z khi đi ra ngoài thì sẽ là undefind vì z đang nằm trong một khối lệnh, nhưng nếu là var z = 133 thì z là 133 khi ở bên ngoài

// console.log("z" + z)

// Nói về == và ===

// hai dấu bằng so sánh về giá trị không so sánh về kiểu

console.log(x == 10); // true
console.log(x == "10"); // true

// Ba dấu bằng so sánh cả kiểu giá trị và giá trị.
console.log(x === "10"); //false

// const hằng số

const PI = 3.14;
console.log("PI: " + PI);
console.log(`PI = ${PI}`);

// khi đã khai báo const thì không thể khai báo lại cho biến const đó

// Array
// Mãng, là nơi chứa một chuỗi các ký tự, các số ký tự, các string
let cars = [
    "Mercedes G63",
    "MC Laren 5705", //empty item: đối tượng trống rỗng
    ,
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];

console.log(cars);

// length = 5, có 5 phần tử bên trong mãng. Trải dài theo index từ 0 đến 4

console.log(cars[0]); // Lấy ra phần từ đầu tiên
// Nếu như phần tử ta muốn lấy ra không có trong danh sách thì sẽ là undefined

// Khi đọc dữ liệu API trả về thỉnh thoảng có vài item có bị dính các vấn đề về empty item
// Biện pháp khắc phục:
// Có một vài cách để loại bỏ được empty item chẳng hạn là filter

let message =
    "I like the cars \
And many others \
Please buy and buy ";

console.log(message);

//  dấu \ cho phép viết liền mà không khần xuống hàng

//  dấu \n cho phép xuống hàng tại vị trí đặt nó.

let i = 0;
while (i < 10) {
    i++;
    console.log(`i = ${i}`);
}

// câu lệnh if else

let marks = 5;
if (marks > 0 && marks < 4.9) {
    console.log("bad, you are failed");
} else if (marks > 4.9 && marks <= 6) {
    console.log("Normal");
} else if (marks > 6 && marks <= 8) {
    console.log("good");
} else if (marks > 8 && marks <= 10) {
    console.log("Excellent");
} else {
    console.log("Mark is undefined");
}

// Duyệt nội dung trong vòng lặp for (iterate using for loop)
for (i = 0; i < 10; i++) {
    if (i == 3 || i == 5) {
        continue;
        // continue: có nghĩa là tiếp tục, điều này có nghĩa nếu thỏa điều kiện, thì sẽ chạy lệnh continue và bỏ qua bước lặp ở giai đoạn, cụ thể là lúc i = 3 trong trường hợp này và tiếp tục lặp qua tiếp.
        // && => and, || => or

        // i % 2 == 0 ( i chia hết cho 2 )
    }
    console.log(`i = ${i}`);
}

// Iterate an array/list: Duyệt nội dung trong một mãng

// Ở đây tận dụng lại biến cars ở trên

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Lưu ý biến i này chỉ hoạt động trong giới hạn của vòng lặp for. Khi ra khỏi vòng lặp for thì biến i đấy sẽ được giải phóng không còn tồn tại nữa

// ForEach: dùng nhiều hơn vòng for

cars.forEach(function (car) {
    console.log(car);
});

// Giải thích: cars là mãng, dùng forEach function được cung cấp từ JS (ở đây là viết hàm thực hiện function(car){console.log(car)} car ở đây là đối só truyền vào từ mãng)

// Cách viết ngắn hơn dùng Arrow function
// function lúc này là anonymus function hoặc arrow function
// cars.forEach((argument1, ar2, ar3,...) => {...})
console.log("==== Vòng lặp ForEach với arrow function ====");
cars.forEach((car) => console.log(car));

// For of (lặp ra từng phần tử trong mãng)
for (let car of cars) {
    console.log(`name: ${car}`);
}
// For in (lặp ra từng index của mãng đó, nói thẳng ra là duyệt chỉ số của từng phần tử trong mãng)
for (let car in cars) {
    console.log(`i: ${car}`);
}

// Dùng forEach để duyệt giống for of và for in
// Vòng lặp sẽ duyệt theo thứ tự forOf trước sau đó tới forIn
cars.forEach((car, index, array) => {
    console.log(`i = ${index}, car = ${car}`);
});

// Học về Filter

// Fiter item, How to find some items which contains "Appolo"
// Lọc item, làm thế nào để tìm được các phần tử trong đó có chứa "Appolo"
// filter("function return True/False")

// Trước tiên lọc phải lưu vào một cái biến, để sau khi lọc xong nó lưu kết quả vào biến sau đó mới in ra giá trị của cái biến.
// Lưu ý biến filteredCars được khai báo là một mãng mới, dùng chứa kết quả sau filter, array này có thể sẽ rỗng vì sau khi lặp không thu được kết quả giống yêu cầu
// Lý do tại sao khi lọc phải lưu nó vào mãng mới, tránh làm mất hết dữ liệu sau khi lọc

let filteredCars = cars.filter(function (car) {
    return car.includes("Appolo"); // dòng này định nghĩa như thế nào là filter
});

console.log(`Filtered Car: ${filteredCars}`);

// Thêm một phần tử vào mãng. add more items in array
cars.push("EQS Mercedes Sedan");
console.log(cars);

// Bài tập tìm ra 2 chiếc Mercedes

let findMercedes = cars.filter((car) => {
    //return car.includes("Mercedes"); // cái này lọc ra kết quả nhưng chưa phân biệt được hoa thường
    return car.toLowerCase().includes("Mercedes");
});

// Để lọc ra kết quả không phân biệt hoa thường thêm cả hàm này toLowerCase()

// in ra các tên xe tìm được
console.log(`We have ${findMercedes}`);
// in ra số lượng xe tìm được
console.log(`We found ${findMercedes.length} cars`);

// một mãng các dãy số || an array of numbers
let someNumbers = [3, 5, 6, 7, 8, 1, 9];
// Tạo ra cái mãng mới khác dựa trên someNumbers || what is "mapped array"? || map: gọi là ánh xạ
// đặt ra cái biến để lưu lại mãng sau khi map.
// Bắt đầu tiền hành map
// eachNumber là các mãng sau khi map của mãng someNumbers, sẵn tiện dùng arrow function thực hiện phép tính lũy thừa và kết quả được trả ngược về cho squaredNumbers.

// Một số lưu ý: mãng bị ánh xạ so với mãng sau khi ánh xạ có cùng độ dài mãng trước và sau khi ánh xạ. Giá trị có thể thay đổi tùy thuộc vào việc function đó có thực hiện tính toán hay là không

// ánh xạ có thê dùng làm giao diện menu, ..

let squaredNumbers = someNumbers.map((eachNumber) => {
    return eachNumber * eachNumber;
});
// Cuối cùng in kết quả
console.log(`Ressult: ${squaredNumbers}`);

// Xóa một hay nhiều phần tử. dùng filter
// Delete an item = filter.

console.log("After delete");

// delete all items which less than 5 || xóa tất cả phần tử nhỏ hơn 5. Nhớ thần chú xóa thì cứ ngược với filter là được
// có nghĩa là cứ filter các phần tử lớn hơn hoặc bằng 5 là xóa được các phần tử nhỏ hơn 5 ra khỏi mãng
someNumbers = someNumbers.filter((eachNumber) => eachNumber >= 5);
console.log(`someNumbers = ${someNumbers}`);

// Function in js

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello("tuan");

//
function sum(x, y) {
    return x + y;
}

// function expression
const multìply = function (a, b) {
    return a * b;
};

// one line function, arrow function
const divide = (a, b) => a / b;

// Nếu mà chia ra số lẽ mà muốn lấy 2 số lẽ phía sau thui chỉ cần thêm tofixed(2) ||  phần thập phân làm tròn 2 số
// const divide = (a, b) => a / b.tofixed(2);
console.log(`Sum 10 and 5 is ${sum(10, 5)}`);
console.log(`Multìply 10 and 5 is ${multìply(10, 5)}`);
console.log(`Divide 10 and 5 is ${divide(10, 5)}`);

// function with default arguments:
function hello(name = "Guest") {
    console.log(`Hello ${name}`);
}

hello();
// Nếu không truyền gì vào thì nó lấy Guest
hello("Tuan");
// nếu truyền vào Tuan thì nó sẽ là Hello Tuan nó sẽ lấy Tuan bỏ vào

// function as an "argument"
// setInterval là hàm bất đồng bộ
// setInterval(function(){
//     console.log('Call this function each 1 seconds')
// }, 1000)

// Bài tâp làm đồng hồ đếm giây
// let seconds = 0;
// setInterval(function(){
//     seconds = seconds + 1
//     // return console.log(`${seconds}. Call this function each 1 seconds`)
//     console.log(seconds)
// }, 1000)

// Define an object
let point = {};
point.a = 1;
point.b = 2;
console.log(`a = ${point.a}, b = ${point.b}`);
// point la một đối tượng

/**
 * Ngoài ra chúng ta có thể mổ sẽ các đối tượng bằng destructuring
 *
 * Destructuring an object
 *
 * kỹ thuật này giúp phá vở mãng truy xuất và lấy ra các phần tử bên trong.
 */

// example Destructuring:

const { a, b } = point;
// khai báo như này a sẽ không ăn vì a trong {a,b} là một phạm trù khác
// a = 123
// kết quả point.a vẫn băng 1
console.log(point.a);

// nếu muốn gán lại point a
point["a"] = 222;

console.log(point);
console.log(typeof point);
console.log(typeof point.a);

const myDreamCar = {
    maker: "Mercedes",
    model: "G63",
    year: "2018",
};

console.log(myDreamCar.maker, myDreamCar.model);
console.log(myDreamCar.color === undefined); //2 dấu bằng phải bằng nhau về giá trị và có thể không bằng nhau về kiểu dữ liệu. 3 dấu bằng sẽ khắc khe hơn, yều phải bằng nhau về mặt giá trị và kiểu dữ liệu.

// alert(JSON.stringify(myDreamCar));

// lưu ý alert sẽ không in ra được Object chính vì vậy phải dùng sự hỗ trợ từ JSON.stringify để chuyển đổi kiểu dữ liệu.

// trong trường hợp là đối tượng dùng for in để lặp ra các trường mặc định của một đối tượng.
for (let key in myDreamCar) {
    console.log(`key = ${key}`);
    // kết quả in ra: maker, model, và year
}

// for of sẽ không dùng được cho đối tượng.
// phải dùng thông qua object.value.
// xem ví dụ như sau:

for (let item of Object.values(myDreamCar)) {
    console.log(`item: ${item}`);
    // kết quả in ra: maker, model, và year
}

// {...myDreamCar}: đây là nhân bản đối tượng gốc ra một đối tượng khác.

// Clone an object: Nhân bản một đối tượng
const myDreamCar2 = { ...myDreamCar }; //... gọi là spread operator

// change the first

myDreamCar.year = "2021";
// Ta thay đổi cái 1 thì cái 2 vẫn giữ nguyên. Vì hai thằng này là 2 vùng nhớ khác nhau. Lưu ý là nội dung ban đầu là giống nhau

console.log(myDreamCar);
console.log(myDreamCar2);
// Nhân bản đối tượng và chỉnh sửa những trường mình muốn

// Create object using constructor function. Tạo ra đối tượng sử dụng hàm constructor (constructor function)
function Car(maker, model, year, color) {
        (this.maker = maker),
        (this.model = model),
        (this.year = year),
        (this.color = color);
    // define methods out of constructor: xác định các phương thức ra khỏi hàm tạo
}

let car1 = new Car("McLaren", "McLaren 720s Spider", "2022", "red");
let car2 = new Car("Toyota", "Tundra", "2022", "army green");
let car3 = new Car("Mazda", "Maxda CX-30", "2019", "black");
let car4 = new Car("Tesla", "Tesla Model Y", "2020", "blue");

car1.run = function (speed) {
    console.log(`I run at speed: ${speed} km/h`);
};

car1.run(123);
// add another methods
car1.describe = function () {
    console.log(`
                 maker: ${this.maker}, \
                 model: ${this.model}, \ 
                 year: ${this.year}, \
                 color: ${this.color}, 
                `);
};

car1.describe();
car2.describe = car1.describe;
// Phương thức car2.describe đến car1
car2.describe();
car3.describe = car1.describe;
car3.describe();

// How to delete a property? Làm cách nào để xóa một thuộc tính

console.log("Before delete color");
console.log(car1);
console.log("After delete color");
// bài cũ đã học xóa một phần tử trong mãng dùng filter, nhưng đây là onbject ta sẽ dùng delete
delete car1.color;
console.log(car1);

class Person {
    constructor(name, email, age) {
        this.name = name ?? "";
        this.email = email ?? "";
        this.age = age || 18;
    }
}

//Define a class
class Employee extends Person {
    // constructor(){
    //     this.name = '',
    //     this.deparmentName = 'No department'
    // }
    // Constructor with arguments
    constructor(name, email, age, department) {
        super(name, email, age); //super có nghĩa kế thừa từ thằng cha. trong trường hợp này cha của Employee là Person
        // ?? này là được hiểu là giá trị mặc định default value
        this.deparmentName = department ?? "No department";
    }
}

let employeeA = new Employee();
console.log(employeeA);
let employeeB = new Employee("Tuan", "IT");
console.log(employeeB);
let employeeC = new Employee("Jhon", "jhon@gmail.com", 23, "IT");
console.log(employeeC)
console.log(`employee C: ${JSON.stringify(employeeC)}`)

// Hàm JSON.stringify(truyền đối tượng vào đây). Hàm này có công dụng biến một đối tượng thành string, để ta có thể nhìn và đọc thông tin bên trong
let personC = new Person("Tuan", "tuan@gmail.com", 23);
console.log(`person C: ${JSON.stringify(personC)}`)

// personC.constructor.name === "Person" kiểm tra đối tượng personC có bằng tuyệt đối với Person khởi tạo ko


/**
 * Promise: lời hứa
 * Promise is an Object representing: Promise là đại diện cho một đối tượng 
 * The eventual completion or failure of an asynchronous operation: Việc hoàn thành hoặc thất bại cuối cùng của một hoạt động không đồng bộ:  
 * 
 * Đối tượng này sẽ trả về 2 cái hàm thành công và thất bại. Kết quả trả về sẽ nhảy vào 1 trong hai hàm thành công hay thất bại.
 * Và trong lúc gọi hàm promise cho đến lúc nhận kết quả nó có 1 độ trễ. 
 * Trong khoảng thời gian trễ sẽ có một số hàm đồng bộ được thực hiện, những hàm thuộc promise sẽ phải mất thời gian thực hiện nên sẽ thực hiện sau. 
 * Chính vì thế khai niệm asynchronous function ra đời: Hàm bất đồng bộ.
 * Example: send a request to API server.
 * https://api.publicapis.org/entries
 * Trong khi chờ kết quả từ hàm bất đồng bộ chạy và trả về kết quả, những hàm khác không thuộc hàm bất đồng bộ vẫn tiếp tục chạy. Những thằng khác không đợi hàm bất đồng bộ, và những thằng hàm bất đồng bộ cũng không đợi hàm khác.
 * 
 */

// const url = 'https://api.publicapis.org/entries'
// // đặt biến url tham chiếu đến đường link https://api.publicapis.org/entries
// debugger
// console.log("Begin sending status")
// fetch(url).then(response => {
// // Hàm fetch gửi yêu cầu đến API, hàm fetch là 1 promise .then có nghĩa là nếu thành công sẽ truy suất vào khối 
//     // this is success block
//     console.log("received response")
//     debugger
//     response.json().then(data => {
//         console.log('change response to json object')
//         debugger
//     })
// }).catch(error => {
//     //.catch để bắt lỗi, khi sai đường dẫn, khi mạng có vấn đề, url (api) không tồn tại
//     // this is failed block
//     debugger
//     console.log('error :' +error)
// })
// debugger
// console.log("do other tasks")
// Nhớ kỹ Hàm promise là sẽ có 2 khối trả về 1 khối thành công và 1 khối thất bại. Và tất nhiên kết quả trả về chỉ có 1, chính vì vậy 1 là thành công 2 là thất bại. Không cùng 1 lúc chui vào cả 2 khối được


// Now do 2 asynchronous tasks

const urlGetEntries = 'https://api.publicapis.org/entries'
const urlGetCategories = 'https://api.publicapis.org/categories'
debugger
console.log("Begin sending status")

async function fetchDataFromAPIServer(url){
    return new Promise((resolve, reject) => {
        debugger
        console.log("Begin sending request")
        fetch(url).then(response => {
            console.log('recevied response')
            debugger
            response.json().then(data => {
                console.log('changed response to json object')
                debugger
                resolve({result: data,error: '', message: 'Fetch data successfully'})
            })
        }).catch(error => {
            debugger
            console.log('error:' +error)
            reject({error: error, message: 'Cannot get data because ....'})
            // this is failed block
        })
    })

}

fetchDataFromAPIServer(urlGetEntries).then(result => {
    debugger
}).catch(error => {
    debugger
})


// Xử lý bất đồng bộ thành đồng bộ. Có nghĩa ở trên là thực hiện việc 1 và 2 cùng 1 lúc. Nhưng xử lý bất đồng bộ là xử lý hết nhiệm vụ 1 rồi mới xử lý nhiệm vụ 2

// How do task1, then task2 => using async/await
// Làm cách nào để thực hiện nhiệm vụ 1 sau đó thực hiện nhiệm vụ 2 => giải pháp sử dụng async/await.
async function do2AsyncTasks() {
    try {
        console.log("Begin task 1")
        let result1 = await fetchDataFromAPIServer(urlGetEntries)
        console.log("End task 1")
        console.log("Begin task 2")
        let result2 = await fetchDataFromAPIServer(urlGetCategories)
        console.log("End task 2")
    } catch (exception) {
        console.log("Error", + JSON.stringify(exception))
    }
}

do2AsyncTasks()