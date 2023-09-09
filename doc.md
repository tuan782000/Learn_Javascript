# JavaScript Basic - (Không đề cập đến DOM)

- Câu lệnh "console.log" huyền thoại, thường dùng để kiểm tra. Này dùng in ra nhưng phía trong trình duyệt Dev Tool
```JS
console.log("Hello world");
```
---

- Câu lệnh ALert in ra màn hình, người dùng có thể nhìn thấy và nó chạy đầu tiên khi load trang web lên.

```js
alert("Hello world");
```

Tại sao người ta dùng console để in thông tin nhiều hơn?

Vì là để check cái nào hiện trước hiện sau.

cung cấp đa dạng log: console.log(), console.warn(), console.error(),...

---
```JS
let name = "Tuan"; //this is variable
```
---

**Chú ý: JS is case-sensitive. có phân biệt hoa thường**

---

**Scope**

Vì các vấn đề liên quan đến Scope trong JavaScript. Cho nên hiện tại người ta dùng **let** và **const** thay thế cho **var**

Dùng let cho các trường hợp biến có thể được gán lại. Ví dụ trong các vòng lặp người ta sẽ sử dụng **let** thay vì dùng **const**.

Dùng **const** cho các trường hợp biến này không thay đổi.

---

Công dụng của **biến** giống như 1 thùng chứa, việc của người code là đổ giá trị vào.

Giống như chai, có thể đựng nước, dầu ăn, nước mắm, nước ngọt,...

Trong JavaScript có chứa nhiều kiểu dữ liệu.

Biến chứa chuỗi - **string**:

```JS
let Name = "Hoang";

console.log("name: " + name + " Name:" + Name);

```
Biến chứa số - **number**:
```JS
let x = 10;
console.log("x: " + x);
let y = 3;
console.log(x ** 3); //Power: số mũ
```
**Lưu ý: Quy tắc đặt tên biến**

- không đặt tên biến bắt đầu là con số
- không đặt tên biến trùng với các tên đã đặt trong JS: chẳng hạn, let this = 1; let constructor = 3; ... các tên này đã được js sử dụng làm tính năng nên không được dùng lại

Biến chứa giá trị **boolean**:

```JS
let z = true;
console.log(z); // true
```

```JS
// Câu điều kiện

let z = 12;

if (1 == 1) {
    let z = 133;
    console.log(z);
    // if này luôn đúng, nên sẽ chạy vào gán vào z = 133
}

console.log(z); // 12

// biến z ban đầu là nằm trong 1 scope window
// biến z khai báo trong if là nằm trong scope của if
// Việc khai báo lại 1 biến đã tồn tại sẽ là không thể nhưng vì 2 z khác scope nên điều đó chứng tỏ 2 biến z không liên quan nhau.

// Khẳng định 2 biến z này hoàn toàn khác nhau. Không liên quan gì.

// Lý do là do 2 thằng ở 2 scope khác nhau.

// scope: phạm vi - { }

```
Chuỗi nối "+" với số thành chuỗi
```JS

 let z = 1;
 console.log("z" + z);
 //kết quả: z1
```

Quy tắc bất kỳ kiểu dữ liệu number + với chuỗi trong JavaScript đều thành chuỗi.

```JS
let a = 3;
let b = 4;
let c = 5;

console.log(a + b + "c" + c); // 7c5
console.log(a +"c" + b + c); // 3c45
console.log(a + b + c +"c" ); // 12c

```
---
Bàn luận về == và === :

- Đây được hiểu là phép **so sánh bằng**. Cả hai đều là phép so sánh bằng Nhưng **2 dấu bằng** sẽ khác **3 dấu bằng** ở điểm, hai dấu bằng **so sánh về giá trị không so sánh về kiểu**. Ba dấu bằng **so sánh cả kiểu giá trị và giá trị**.


Cụ thể về hai dấu bằng so sánh về giá trị không so sánh về kiểu. Ví dụ:
```JS
let x = 10;
console.log(x == 10); // true
console.log(x == "10"); // true
```

Cụ thể về ba dấu bằng so sánh cả kiểu giá trị và giá trị.

```JS
let x = 10;
console.log(x === 10); // true
console.log(x === "10"); //false lý do khác kiểu dữ liệu
```
---

**const** được hiểu là hằng số, hằng số là số luôn luôn không đổi theo thời gian. Ví dụ như số "PI"

```JS
const PI = 3.14;
console.log("PI: " + PI);
console.log(`PI = ${PI}`);
```

khi đã khai báo const thì **không thể khai báo lại** cho biến const đó.

---

## Array - Mảng

Mảng, là nơi có thể chứa một chuỗi các ký tự (string), các số ký tự(number), một loạt các object. Cũng có thể chứa nhiều loại dữ liệu khác nhau bên trong 1 array.

```JS
// Chứa 1 loạt các chuỗi - string
let cars = [
    "Mercedes G63",
    "MC Laren 5705", 
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];

console.log(cars);


// Chứa 1 loạt các số - number
let numbers = [
    1,2,3,4,5,6,7
]

console.log(numbers);


// Chứa object
let person = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Tom', age: 35 },
  { name: 'Emily', age: 28 },
  { name: 'Michael', age: 32 }
];

console.log(person);


// Mảng chứa nhiêu loại dữ liệu khác nhau
let myArray = [1, 'Hello', true, { name: 'John' }, null];

console.log(myArray);


// Nếu vô tình để trống thì mảng sẽ tự động gán giá trị cho vị trí đó empty
let carsWithArrayAndString = [
    "Mercedes G63",
    "MC Laren 5705", 
    , //empty item: đối tượng trống rỗng
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];

console.log(carsWithArrayAndString);

```

Một số thông tin của mảng

```JS
let cars = [
    "Mercedes G63",
    "MC Laren 5705", 
    , //empty item: đối tượng trống rỗng
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];

// .length: chỉ ra mảng đó dài bao nhiêu, bắt đầu đếm từ 1.
console.log(cars.length);

// Lưu ý rằng phương thức length trả về số lượng phần tử trong mảng, không phải chỉ số lớn nhất. Vì mảng bắt đầu từ chỉ số 0, số lượng phần tử sẽ bằng chỉ số lớn nhất cộng thêm 1.

// Tức là trừ đi 1 sẽ ra chỉ số index lớn nhất

// Index: chỉ mục thì lại bắt đầu từ số 0.

// Nếu ta muốn lấy ra 1 phần tử cụ thể nằm bên trong mảng, thì ta phải dựa vào index

console.log(cars[0]); // Lấy ra phần từ đầu tiên - tại vì mảng bắt đầu từ 0 nên phân tử đầu tiên là 0

// Nếu như phần tử ta muốn lấy ra không có trong danh sách thì sẽ là undefined

// Nhìn vào mảng ở trên, tôi đã cố tính để rỗng 1 phần tử. Nếu bây giờ tôi lấy ra phần tử rỗng đó sẽ là undefined

console.log(cars[2]); // undefined

```
**Tại sao lại có undefined và ảnh của nó là gì, cách giải quyết?**

Trong quá trình dữ liệu được lấy từ trong Database ra và gửi về phía client. Thỉnh thoảng sẽ có 1 vài item dính các vấn đề về empty item

Biện pháp khắc phục:

Có một vài cách để loại bỏ được empty item chẳng hạn là filter, lọc ra các kết quả empty và loại bỏ nó.

---

Xuống hàng chuỗi trong JS.

dấu \ cho phép viết liền mà không khần xuống hàng - trong code xuống hàng nhưng kết quả không xuống hàng

dấu \n cho phép xuống hàng tại vị trí đặt nó. - xuống hàng -

```JS
// Mặc dù xuống hàng nhưng vẫn viết liền khi kết quả hiển thị
let message =
        "I like the cars \
And many others \
Please buy and buy ";

console.log(message);

// Xuống hàng 

let mess = "Tôi tên là Tuấn.\nQuê quán Quy Nhơn.\nTôi có thể làm quen bạn được không?";

console.log(mess);
```

---

Vòng lặp:
```JS
// Vòng lặp while

let i = 0;
while (i < 10) {
    i++;
    console.log(`i = ${i}`);
}

// Vòng lặp do while

let j = 0;
do {
    j++;
    console.log(`j = ${j}`);
} while (j < 10);

// Vòng lặp while khác gì so với do while

// Khác 1 điểm duy nhất: 
// - while: phải thỏa điều kiện mới chạy.
// - do while: không cần biết có thỏa hay không thì vẫn chạy trước 1 lần. sau đó nếu thỏa thì chạy tiếp, không thỏa thì chạy tiếp.

```
---

Câu lệnh if else:

```JS

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

```
---
Vòng lặp for

Duyệt nội dung trong vòng lặp for (iterate using for loop)

```JS
// continue: có nghĩa là tiếp tục, điều này có nghĩa nếu thỏa điều kiện, thì sẽ chạy lệnh continue và bỏ qua bước lặp ở giai đoạn, cụ thể là lúc i = 3 trong trường hợp này và tiếp tục lặp qua tiếp.

// && => and, || => or

// i % 2 == 0 ( i chia hết cho 2 )


for (i = 0; i < 10; i++) {
    if (i == 3 || i == 5) {
        continue;
    }
    console.log(`i = ${i}`);
}

/**
 * Kết quả:
 * i = 0
 * i = 1
 * i = 2
 * i = 4
 * i = 6
 * i = 7
 * i = 8
 * i = 9
*/

for (i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`i = ${i}`);
}
/**
 * Kết quả:
 i = 1
 i = 3
 i = 5
 i = 7
 i = 9
 * 
*/
```
---

**Iterate an Array/list**: Duyệt nội dung trong một mãng

```JS
let cars = [
    "Mercedes G63",
    "MC Laren 5705", 
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];

// Vòng lặp for rất thích hợp cho các mảng biết trước số lượng.

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Lưu ý biến i này chỉ hoạt động trong giới hạn của vòng lặp for. Khi ra khỏi vòng lặp for thì biến i đấy sẽ được giải phóng không còn tồn tại nữa.

// i sẽ không bao giờ đạt đến cực đại cars.length vì luôn bé hơn.
// đồng thời index cũng là luôn bé hơn cars.length - 1, trùng với i. Rất thích hợp để duyệt qua từng phần tử trong mảng.

```
// ForEach: dùng nhiều hơn vòng for
```JS

let cars = [
    "Mercedes G63",
    "MC Laren 5705", 
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];


cars.forEach(function(car) {
    console.log(car);
});
```

Giải thích: cars là mãng, dùng forEach function được cung cấp từ JS (ở đây là viết hàm thực hiện function(car){console.log(car)} car ở đây là đối só truyền vào từ mãng)

Cách viết ngắn hơn dùng Arrow function

function lúc này là anonymus function hoặc arrow function

```JS
    let cars = [
        "Mercedes G63",
        "MC Laren 5705", 
        "Lamborgini Aventador",
        "Ferrari F8 Spider",
        "Appolo IDE",
    ];
    // mảng.forEach((argument1, ar2, ar3,...) => {...})
    cars.forEach((car) => {console.log(car)})
```

// For of (lặp ra từng phần tử trong mảng)
```JS
for (let car of cars) {
    console.log(`name: ${car}`);
}

```
// For in (lặp ra từng index của mãng đó, nói thẳng ra là duyệt chỉ số của từng phần tử trong mãng)
```JS
for (let car in cars) {
    console.log(`i: ${car}`);
}
```
---

Giải thích dễ hiểu:

key: value;

for...of: lấy ra value

for...in: lấy ra key

Bạn có thể thấy mảng cars

[
    "Mercedes G63",
    "MC Laren 5705", 
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
]

nhưng thực ra có index, index ẩn

Góc nhìn là index.

[
    0: "Mercedes G63",
    1: "MC Laren 5705", 
    2: "Lamborgini Aventador",
    3: "Ferrari F8 Spider",
    4: "Appolo IDE",
]

---
Dùng forEach để duyệt giống for of và for in

Vòng lặp sẽ duyệt theo thứ tự for...of trước sau đó tới for...in
```JS
let cars = [
    "Mercedes G63",
    "MC Laren 5705", 
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];
cars.forEach((car, index, array) => {
    console.log(`i = ${index}, car = ${car}`);
});
// Tham số truyền vào car sau khi lặp, index của car

// Như nào gọi là callbacks, là 1 hàm đóng vai trò làm tham số cho việc gọi tới 1 hàm khác

//forEach là 1 hàm cung cấp sẵn, đối số là anonymous function.

// Ta gọi này 1 callbacks.

// Đối số của anonymous function là car, index, array

/**
 * 
1. car: Đại diện cho giá trị (value) của phần tử hiện tại trong mảng cars. Trong mỗi lần lặp, giá trị (value) của phần tử sẽ được gán cho biến car.

2. index: Đại diện cho chỉ số của phần tử hiện tại trong mảng cars. Trong mỗi lần lặp, chỉ số của phần tử sẽ được gán cho biến index.

3. array: Đại diện cho mảng cars đang được lặp qua. 

Tips: tham số thứ 3 array có thể bỏ cũng được
*/

// Viết gọn lại như sau
cars.forEach((car, index) => {
    console.log(`i = ${index}, car = ${car}`);
});
```

---
**Học về Filter**:

Fiter item, How to find some items which contains "Appolo".

Lọc item, làm thế nào để tìm được các phần tử trong đó có chứa từ khóa "Appolo".

- Callbacks: sử dụng hàm filter(nhận vào đối số là 1 function)

filter("function return True/False")

Trước tiên lọc phải lưu vào một cái biến, để sau khi lọc xong nó lưu kết quả vào biến sau đó mới in ra giá trị của cái biến.

Lưu ý biến filteredCars được khai báo là một mãng mới, dùng chứa kết quả sau filter, array này có thể sẽ rỗng vì sau khi lặp không thu được kết quả giống yêu cầu.

Lý do tại sao khi lọc phải lưu nó vào mãng mới, tránh làm mất hết dữ liệu sau khi lọc

--includes: bao gồm--

```JS
let cars = [
    "Mercedes G63",
    "MC Laren 5705", 
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
];

// Cách 1:

let filteredCars = cars.filter(function (car) {
    return car.includes("Appolo"); // dòng này định nghĩa như thế nào là filter
});

// dùng arrow function cũng được

// Cách 2:

let filteredCars = cars.filter((car) => {
    return car.includes("Appolo"); // dòng này định nghĩa như thế nào là filter
});


// Sau khi lọc xong in kết quả
console.log(`Filtered Car: ${filteredCars}`);
```


Thêm một phần tử vào mãng. add more items in array
```JS
cars.push("EQS Mercedes Sedan");
console.log(cars);
```
---

### Bài tập: Tìm ra 2 chiếc Mercedes trong mảng 
```JS

let cars = [
    "Mercedes G63",
    "MC Laren 5705", 
    "Lamborgini Aventador",
    "Ferrari F8 Spider",
    "Appolo IDE",
    "EQS Mercedes Sedan"
];

// Hãy nhớ rằng JS có phân biệt hoa thường

let findMercedes = cars.filter((car) => {
    //return car.includes("Mercedes"); // cái này lọc ra kết quả nhưng chưa phân biệt được hoa thường
    return car.toLowerCase().includes("Mercedes"); // việc lấy như này giúp lấy các kết quả viết hoa và viết thường.

    // Để lọc ra kết quả không phân biệt hoa thường thêm cả hàm này toLowerCase()

    // in ra các tên xe tìm được
    console.log(`We have ${findMercedes}`);
    // in ra số lượng xe tìm được
    console.log(`We found ${findMercedes.length} cars`);
});
```
---

**Học về map()**

Đề bài:

Cho một mãng các dãy số - an array of numbers:
```JS
let someNumbers = [3, 5, 6, 7, 8, 1, 9];
```

Tạo ra cái mãng mới khác dựa trên someNumbers - what is "mapped array"? - map: gọi là ánh xạ dữ liệu từ mảng cũ qua mảng mới.

Việc cần làm tạo ra cái biến để lưu lại mảng sau khi sử dụng hàm map.

- Bắt đầu tiền hành map.

- eachNumber giống như 1 biến sẽ dùng lưu trữ từng giá trị của someNumbers mỗi khi map đi qua từng giá trị trong mảng someNumbers. 

- Sẵn tiện dùng arrow function thực hiện phép tính lũy thừa và kết quả được trả ngược về cho squaredNumbers đồng thời lưu lại các kết quả mảng mới.

- Và mỗi lần đi qua từng giá trị thì phải thực hiện tính năng của anonymous function xong đồng thơi lưu lại vào trong squaredNumbers

- Một số lưu ý: mảng bị ánh xạ so với mảng sau khi ánh xạ có cùng độ dài mảng trước và sau khi ánh xạ. Giá trị "có thể thay đổi" tùy thuộc vào việc function đó có thực hiện tính toán hay là không.

- ánh xạ có thể dùng làm giao diện menu, ...

Bài làm:

```JS
let someNumbers = [3, 5, 6, 7, 8, 1, 9];

let squaredNumbers = someNumbers.map((eachNumber) => {
    return eachNumber * eachNumber;
});
// Cuối cùng in kết quả
console.log(`Ressult: ${squaredNumbers}`);
```

---

Bài tập: xóa một hay nhiều phần tử. 

Cách giải quyết dùng filter - Delete an item = filter.

Đề: delete all items which less than 5 - xóa tất cả phần tử nhỏ hơn 5. 

Mẹo: Nhớ thần chú "xóa" thì cứ ngược lại với hàm "filter" là được

Giải ngĩa mẹo: Có nghĩa là cứ filter các phần tử lớn hơn hoặc bằng 5 là xóa được các phần tử nhỏ hơn 5 ra khỏi mảng.
```JS
let someNumbers = [3, 5, 6, 7, 8, 1, 9];

//có dùng callbacks và arrowfunctions làm đối số cho hàm filter.
someNumbers = someNumbers.filter((eachNumber) => eachNumber >= 5);

console.log("After delete");
console.log(`someNumbers = ${someNumbers}`);
```

---
Function in JavaScript - Hàm trong JavaScript

```JS
function sayHello(name) { // nhận vào đối số
    console.log(`Hello ${name}`); // sử dụng đối số truyền vào
}

sayHello("tuan"); // gọi hàm truyền tham số
```
- Hàm có thể làm được nhiều thứ.

- Ngoài các hàm JavaScript tự định nghĩa.

- Ta có thể tự tạo ra các chức năng mới mà JavaScript chưa định nghĩa.

Viết một hàm tính tổng:

```JS
function sum(x, y) {
    return x + y;
}
```

Hàm có nhiều biến thể: Hàm có tên, hàm không tên, hàm mũi tên

Hàm có 2 loại: Hàm không có giá trị trả về, Hàm có giá trị trả về


Function expression - hàm không tên
```JS
const multìply = function (a, b) {
    return a * b;
};
multìply(2,4) //8
```

One line function, arrow function - Hàm 1 dòng - Hàm mũi tên

```JS
// Cách 1
const divide = (a, b) => {
    return a / b ;
}
// Cách 2: gọn lại trong trường hợp có 1 dòng return
const divide = (a, b) => a / b;

divide(4,2); // 2
```

Nếu mà chia ra số lẻ mà muốn lấy 2 số lẽ phía sau thui chỉ cần thêm tofixed(2) - phần thập phân làm tròn 2 số
```js
const divide = (a, b) => a / b.toFixed(2);
divide(3,2); // 1.5;
```

```JS
console.log(`Sum 10 and 5 is ${sum(10, 5)}`);
console.log(`Multìply 10 and 5 is ${multìply(10, 5)}`);
console.log(`Divide 10 and 5 is ${divide(10, 5)}`);
```

function with default arguments - hàm với đối số mặc định

Hàm hello được gọi nhưng không truyền đối số, nhưng mình đặt giá trị mặc định cho nó. Nếu nó không có đối số truyền vào, thì nó sẽ lấy tham số mặc định để truyền vào.

```JS
function hello(name = "Guest") {
    console.log(`Hello ${name}`);
}

hello();
// Nếu không truyền gì vào thì nó lấy Guest
// Nếu truyền vào Tuan thì nó sẽ là Hello Tuan nó sẽ lấy Tuan bỏ vào
hello("Tuan");
```

---

Nảy giờ ta cũng được thấy hàm làm đối số và được đặt trong gọi hàm

Minh họa rõ hơn về callbacks
function as an "argument" - là đối số truyền vào

setInterval là hàm, cụ thể là 1 hàm bất đồng bộ.

Như nào là bất đồng bộ. Có nghĩa code chạy từ trên xuống dưới theo 1 luồng duy nhất. khi chạy gặp setInterval 1 trong số các hàm bất đồng bộ, thì nó sẽ bỏ qua và thực hiện nó sau cùng.

```JS
// Hàm này được đặt sau 1s sẽ chạy.
setInterval(function(){
    console.log('Call this function each 1 seconds')
}, 1000)

```


Bài tâp: Làm đồng hồ đếm giây.
```JS

let seconds = 0; // tạo 1 biến seconds là 0

// Muốn sau mỗi 1 giây thì seconds phải tăng lên 1

// sử dụng setInterval để set thời gian 1s, sau đó truyền hàm vào làm đối số. Hàm này được xem là 1 callbacks. Sau mỗi 1 giây hàm được thực thi.

setInterval(function(){
    seconds = seconds + 1
    // return console.log(`${seconds}. Call this function each 1 seconds`)
    console.log(seconds)
}, 1000)

```
---

Define an object - Định nghĩa về 1 đối tượng
```JS
let point = {}; // như này là 1 đối tượng
point.a = 1; // thêm a có giá trị là 1 vào trong đối tượng ponit
point.b = 2; // thêm b có giá trị là 1 vào trong đối tượng ponit
console.log(`a = ${point.a}, b = ${point.b}`); 
// in ra a và b bằng cách tham chiếu từ trong đối tượng ponit ra

// point là một đối tượng
```

---
Chúng ta có thể "mổ" sẽ các đối tượng bằng cú pháp destructuring

Gọi đó là kỹ thuật Destructuring an object

Kỹ thuật này phá vở mảng truy xuất và lấy ra các phần tử bên trong.


Có hai loại Destructuring: Destructuring Objects và Destructuring Arrays.


Example Destructuring - Ví dụ về Destructuring
```js
const { a, b } = point;
```
khai báo như này a sẽ không ăn vì a trong {a,b} là một phạm trù khác
```JS
a = 123
console.log(point.a);
// kết quả point.a vẫn bằng 1


// nếu muốn gán lại point a
point["a"] = 222;

console.log(point);

console.log(typeof point); // object

console.log(typeof point.a); // number

console.log(point.a); // 222
```

Ví dụ khác:

```JS
const [a, b] = [1, 2]
console.log(a, b); //1 2
```

Có biến a và b tồn tại trong array. Đồng thời set giá trị tương ứng bằng phép gán

In ra giá trị a, b nhận được 1 và 2 và vị trí a và b thì đối xứng với 1 và 2 thì gán lần lượt vào.

Một ví dụ khác:

```JS
const [a,b,c] = [1,2,3,4,5,6];
console.log(a,b,c); // 1,2,3
```
Mặc dù truyền dư nhưng nó vẫn chỉ lấy đủ, không lấy dư. Phân dư sẽ bị loại bỏ

```JS
const [a,b,...c] = [1,2,3,4,5,6];
console.log(a,b,c); // 1,2,[3,4,5,6]
```
Bạn thấy điều gì lạ không ...c? Nó sẽ tương ứng với những giá trị còn lại tương ứng với kiểu của root (arrays). Hay trong ngôn ngữ javascript thì ...c chính là rest params hay rest es6.

rest params: thường đứng 1 mình hoặc nếu đứng chung thì luôn được đặt cuối cùng. Vì lý do các phần dư còn lại phía sau sẽ được nó gộp lại thành 1 mảng. Xem mảng đó là 1 đối số.

...c ở trên sẽ gom các phần còn thừa từ vị trí 2 trở đi gộp lại thành 1 mảng, mảng đó được xem như là 1 đối số cuối cùng. Thành ra kết quả sẽ là: 1,2,[3,4,5,6]

Ngoài ra destructure params object cũng tương tư như arrays, chúng ta đi xem một ví dụ về việc sử dụng destructure trong object.

```JS
const {a, b} = {a: 1, b: 2};
console.log(a, b);// 1, 2

// add c 

const {a, b, c} = {a: 1, b: 2, c: () => 3}
console.log(a, b, c)// 1, 2, () => 3

// add ...c
const {a, b, ...c} = {a: 1, b: 2, c: () => 3, d: 4}
console.log(a, b, c) // 1, 2, {d: 4, c: f}

//f được hiều là: f = () => 3
```
Việc sử dụng destructuring trong object cùng giống như array trong ví dụ đâu tiên, và sử dụng rest operator


Destructuring là gì? Vì sao phải dùng?

1 - Variable assignment

Hầu hết chúng ta đã làm việc với rest api khi return về một array hay object thì khi sử dụng destructuring lúc này thì quả là hiệu quả;

Ví dụ 4:

Chẳng hạn như chúng ta nhận được một response từ rest api. Chúng ta có thể gán ngay các biến và sử dụng.

```JS
const res = [1, 2, 3, 4,] ;//res.response(); kết quả trả về từ server
const [a, b, c] = res // đem gasb vào biến [a, b, c]
console.log(a, b, c);//1 2 3. 

// Chúng ta có thể nhanh chóng gán vào sử dụng không cần khai váo dài dòng.
```

2 - Swapping

Nói đến Swapping thì cả một bầu trời hiện về, những thuật toán của các nhà phát triển lớn hầu như có nó. Vì vậy destructuring cũng có thể áp dụng trong hoàn cảnh này.

```js
var a = 1; // a = 1
var b = 2; // b = 2
var temp;
temp = a; // temp = 1
a = b; // a = 2
b = temp; // b = 1

console.log(a, b) ;//2, 1

// Trước đó là a = 1, b = 2 sau khi gán tạm thì nó sẽ hoán đổi giá trị, giờ ta thử sử dụng destructuring trong Swapping:

var a = 1;
var b = 2;
[a, b] = [b, a]
console.log(a, b) ;//2, 1

// Rút gọn khá nhiều bước

```
3 - Ignoring values - Bỏ qua giá trị

```JS
const res = () => [1, 2, 3]
const [a, ,b] = res()
console.log(a, b) ;//1,3
```

4 - Assignment to new variables

Gán giá trị cho một biến mới, chúng ta xem tiếp ví dụ tiếp

```JS
const res = {blog: 'anonystick.com', type: 'javascript'}
const {blog: nameBlog, type: newType} = res;
console.log(nameBlog, newType);//anonystick.com, javascript

// Giờ đây nameBlog, và newType là biến mới và cũng được set giá trị tương ứng. 

```

5 - Nested object and array destructuring

Ở trường hợp này thi tôi khuyên các bạn nên sử dụng vì trường hợp này rất nhiều trong mã code của chúng ta nhất là các bạn làm dưới nodejs or backend.

```JS

const blogs = {
	anonystick: [
  	{
      pageFacebook: 'Tip javascript Viet Nam',
      likes: 4789,
      daily: 1323
    }
  ]
}

const {
    anonystick: [
  	{
  	  pageFacebook: namePage,
      likes: numLikes,
      daily: numDaily
    }
  ]
} = blogs;

console.log(namePage, numLikes, numDaily );//Tip javascript Viet Nam, 4789, 1323
```

Với việc sử dụng destructuring, chúng ta phải lấy các giá trị của tất cả các thuộc tính có trong đối tượng bên trong mảng cùng vị trí.


Destructuring assignment trong es6

```JS
const obj = await Model.getObject({name: 'anonystick', blog: 'javascript'});

//model.js

modules.export = {
  getObject: async({name, blog}){
	console.log(name, blog)	
  }
}
```

---

```JS
const myDreamCar = {
    maker: "Mercedes",
    model: "G63",
    year: "2018",
};

console.log(myDreamCar.maker, myDreamCar.model); // "Mercedes", "G63"
console.log(myDreamCar.color === undefined); // true
 //2 dấu bằng phải bằng nhau về giá trị và có thể không bằng nhau về kiểu dữ liệu. 3 dấu bằng sẽ khắc khe hơn, yều phải bằng nhau về mặt giá trị và kiểu dữ liệu.

```

```JS
alert(JSON.stringify(myDreamCar));
```

**Lưu ý:** alert sẽ không in ra được Object chính vì vậy phải dùng sự hỗ trợ từ JSON.stringify để chuyển đổi kiểu dữ liệu.

alert chỉ in ra được chuỗi.

trong trường hợp là đối tượng dùng for...in để lặp ra các trường mặc định của một đối tượng.

```JS
for (let key in myDreamCar) {
    console.log(`key = ${key}`);
    // kết quả in ra:
        // key = maker
        // key = model
        // key = year
}
```

for...of sẽ không dùng được cho đối tượng. Phải dùng thông qua object.value.
xem ví dụ như sau:
```JS
for (let item of Object.values(myDreamCar)) {
    console.log(`item: ${item}`);
        // kết quả in ra: 
        // item: Mercedes
        // item: G63
        // item: 2018
}
```

Destructuring kết hợp rest operator:
{} kết hợp ... 
``` js
{...myDreamCar}

//đây là nhân bản đối tượng gốc ra một đối tượng khác.
```

Clone an object: Nhân bản một đối tượng
```JS
const myDreamCar2 = { ...myDreamCar }; //... gọi là spread operator
```

change the first - Thay đổi đầu tiên.

myDreamCar.year = "2021";

Ta thay đổi cái 1 (myDreamCar.year) thì cái 2 (myDreamCar2.year) sau khi spread operator vẫn sẽ giữ nguyên. Vì hai thằng này là 2 vùng nhớ khác nhau. Lưu ý là nội dung ban đầu là giống nhau.

```JS
console.log(myDreamCar);
console.log(myDreamCar2);
// Từ đó rút ra, nhân bản đối tượng và chỉnh sửa những trường mình muốn
```

---

Create object using constructor function. 

Tạo ra đối tượng sử dụng hàm constructor (constructor function)

Các ES5 trở về trước chưa có class. Nên viết hướng đối tượng theo function.

```JS

// Đoạn code này nghĩa một hàm tạo (constructor function) Car để tạo ra các đối tượng Car. Hàm tạo này có bốn tham số: maker (hãng), model (mẫu xe), year (năm sản xuất), và color (màu sắc).

function Car(maker, model, year, color) {
        (this.maker = maker),
        (this.model = model),
        (this.year = year),
        (this.color = color);
    // define methods out of constructor - xác định các phương thức ra khỏi hàm tạo

    // Trong hàm tạo Car, các tham số được gán cho các thuộc tính tương ứng của đối tượng được tạo bằng cách sử dụng cú pháp this.property = value. Điều này đảm bảo rằng mỗi đối tượng được tạo từ hàm Car sẽ có các thuộc tính maker, model, year, và color.
}

// Sau đó, đoạn code tạo ra bốn đối tượng xe hơi (car1, car2, car3, car4) sử dụng hàm tạo Car và truyền các giá trị tương ứng cho các tham số.
let car1 = new Car("McLaren", "McLaren 720s Spider", "2022", "red");
let car2 = new Car("Toyota", "Tundra", "2022", "army green");
let car3 = new Car("Mazda", "Maxda CX-30", "2019", "black");
let car4 = new Car("Tesla", "Tesla Model Y", "2020", "blue");

// Tiếp theo, đoạn code "mở rộng đối tượng" car1 bằng cách thêm một phương thức run vào đối tượng này. Phương thức run được định nghĩa nhận một tham số là speed và in ra thông báo về tốc độ chạy của xe.

car1.run = function (speed) {
    console.log(`I run at speed: ${speed} km/h`);
};

car1.run(123);

// add another methods - Thêm một phương thức khác

// Sau đó, đoạn code thêm một phương thức describe vào đối tượng car1. Phương thức describe được định nghĩa để in ra thông tin về hãng, mẫu xe, năm sản xuất và màu sắc của đối tượng xe.
car1.describe = function () {
    console.log(`
                 maker: ${this.maker}, \
                 model: ${this.model}, \ 
                 year: ${this.year}, \
                 color: ${this.color}, 
                `);
};
// Sau khi định nghĩa phương thức describe cho car1, đoạn code gọi phương thức này và in ra thông tin của car1.
car1.describe();

// Tiếp theo, đoạn code gán phương thức describe của car1 cho car2 bằng cách sử dụng phép gán car2.describe = car1.describe. Điều này có nghĩa là car2.describe sẽ "trỏ" đến cùng một phương thức describe như car1.describe.
car2.describe = car1.describe;
// Phương thức car2.describe đến car1

// Sau đó, đoạn code gọi phương thức describe của car2 và in ra thông tin của car2.
car2.describe();

// Tương tự, đoạn code gán phương thức describe của car1 cho car3 và gọi phương thức describe của car3 để in ra thông tin của car3.
car3.describe = car1.describe;
car3.describe();
// How to delete a property? Làm cách nào để xóa một thuộc tính
console.log("Before delete color");

console.log(car1);
console.log("After delete color");
// bài cũ đã học xóa một phần tử trong mãng dùng filter, nhưng đây là onbject ta sẽ dùng delete
delete car1.color;
console.log(car1);
```

---

Ví dụ khác OOP trong JavaScript.

Sau thời ES5 tiến đến ES6 Bổ sung tính năng mới class hỗ trợ viết code hướng đối tượng.

```js
// Tạo ra thằng cha- class cha - Khuôn ban đầu
class Person {
    constructor(name, email, age) {
        // ?? này là được hiểu là giá trị mặc định - default value
        this.name = name ?? "";
        this.email = email ?? "";
        this.age = age || 18;

        // ?? và || khá là tương tự nhau trong việc kiểm tra giá trị đó là null hay undefined. Khác ở chỗ "||" thì có thêm bước chuyển đổi thành true hoặc false còn "??" thì không chỉ xem xét giá trị null hoặc undefined.
    }
}

class Employee extends Person {
    // constructor(){
    //     this.name = '',
    //     this.deparmentName = 'No department'
    // }
    // Constructor with arguments
    constructor(name, email, age, department) {
        super(name, email, age); 
        //super có nghĩa kế thừa từ thằng cha. trong trường hợp này cha của Employee là Person

        // ?? này là được hiểu là giá trị mặc định - default value
        // department một thuộc tính riêng biệt của Employee được thêm vào lúc khởi tạo, chỉ Employee có mà Person không có.
        this.deparmentName = department ?? "No department";
    }
}

//Define a class - định nghĩa class con
let employeeA = new Employee();
console.log(employeeA); 
// Employee {name: '', email: '', age: 18, deparmentName: 'No department'}


let employeeB = new Employee("Tuan", "tuanntgcs18661@fpt.edu.vn", 23, "Computing"); 
console.log(employeeB); 
// Employee {name: 'Tuan', email: 'tuanntgcs18661@fpt.edu.vn', age: 23, deparmentName: 'IT'}

let employeeC = new Employee("Jhon", "jhon@gmail.com", 23, "IT");
console.log(employeeC); 
// Employee {name: 'Jhon', email: 'jhon@gmail.com', age: 23, deparmentName: 'IT'}

console.log(`employee C: ${JSON.stringify(employeeC)}`)
// Chuyển đổi key thành "key" - value thành "value"

// employee C: {"name":"Jhon","email":"jhon@gmail.com","age":23,"deparmentName":"IT"}


// Hàm JSON.stringify(truyền_đối_tượng_vào_đây). Hàm này có công dụng biến một đối tượng thành string, để ta có thể nhìn và đọc thông tin bên trong.

let personC = new Person("Tuan", "tuan@gmail.com", 23);
console.log(`person C: ${JSON.stringify(personC)}`)


personC.constructor.name === "Person" // true

// personC.constructor.name === "Person" kiểm tra đối tượng personC có bằng tuyệt đối với Person khởi tạo không
```

---

### 4 tính Chất hướng đối tượng:

- Tính trừu tượng (Abstraction)

- Tính Đóng gói (Encapsulation)

- Kế thừa (Inheritance) (extend)

- Đa hình (Polymorphism)

```JS
class Animal { // (Abstraction)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Phương thức riêng tư (private method) - (Encapsulation)
  calculateAgeInHumanYears() {
    return this.age * 7;
  }

  // Phương thức công khai (public method) - (Encapsulation)
  getAgeInHumanYears() {
    return this.calculateAgeInHumanYears();
  }

  // private chỉ được sử dụng trong phạm vi này. Ở ngoài muốn sử dụng dụng được private phải thông qua hàm được set là public và hàm public phải ở trong và tác động được private. Thì có thể dùng được.
  
  // C muốn điều khiển A, nhưng A không chịu A muốn B điều khiển A. Thằng B thì ai điều khiển cũng được. C lợi dụng B để điều khiển A   
  
}

// Tính chất Kế thừa (Inheritance)
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  // Phương thức đa hình (Polymorphism)
  makeSound() {
    console.log("Woof woof!");
  }
}

// Tạo đối tượng từ lớp con Dog
const myDog = new Dog("Buddy", 3, "Labrador");

// Gọi phương thức của lớp cha
console.log(myDog.getAgeInHumanYears()); // Output: 21

// Gọi phương thức đa hình của lớp con
myDog.makeSound(); // Output: Woof woof!
```
---

### Promise: lời hứa

Promise is an Object representing - Promise là đại diện cho một đối tượng 

The eventual completion or failure of an asynchronous operation - Việc hoàn thành hoặc thất bại cuối cùng của một hoạt động không đồng bộ: 

- Đối tượng này sẽ trả về 2 cái hàm thành công và thất bại. Kết quả trả về sẽ nhảy vào 1 trong hai hàm thành công hay thất bại.

- Và trong lúc gọi hàm promise cho đến lúc nhận kết quả nó có 1 độ trễ. 

- Trong khoảng thời gian trễ sẽ có một số hàm đồng bộ được thực hiện, những hàm thuộc promise sẽ phải mất thời gian thực hiện nên sẽ thực hiện sau.

- Chính vì thế khai niệm asynchronous function ra đời: Hàm bất đồng bộ.

Example: send a request to API server.
https://api.publicapis.org/entries

- Trong khi chờ kết quả từ hàm bất đồng bộ chạy và trả về kết quả, những hàm khác không thuộc hàm bất đồng bộ vẫn tiếp tục chạy. Những thằng khác không đợi hàm bất đồng bộ, và những thằng hàm bất đồng bộ cũng không đợi hàm khác.

```JS
const url = 'https://api.publicapis.org/entries'
// đặt biến url tham chiếu đến đường link https://api.publicapis.org/entries
debugger
console.log("Begin sending status")
fetch(url).then(response => {
// Hàm fetch gửi yêu cầu đến API, hàm fetch là 1 promise và .then có nghĩa là nếu thành công sẽ truy suất vào khối 
     // this is success block - thành công vào khối trong đây
    console.log("received response")
    debugger
    response.json().then(data => {
        console.log('change response to json object')
        debugger
    })
}).catch(error => {
     //.catch để bắt lỗi, khi sai đường dẫn, khi mạng có vấn đề, url (api) không tồn tại
     // this is failed block
     debugger
     console.log('error :' +error)
})
debugger
console.log("do other tasks")
// Nhớ kỹ Hàm promise là sẽ có 2 khối trả về 1 khối thành công và 1 khối thất bại. Và tất nhiên kết quả trả về chỉ có 1, chính vì vậy 1 là thành công 2 là thất bại. Không cùng 1 lúc chui vào cả 2 khối được

```
Viết lại nhìn rõ hơn

```JS

// Bước 1: Gán link đường dẫn gọi vào trong 1 biến
const url = 'https://api.publicapis.org/entries';
// Bước 2: in ra chuỗi để biết code đồng bộ từ trên xuống dưới
console.log("Begin sending status");
// Bước 3: dùng fetch() để gửi yêu cầu đến API, hàm fetch là 1 promise.
// Sẽ có 2 trường hợp xảy ra khi sử dụng 1 promise - thành công hoặc thất bại. thành công đi với .then() thấy bài đi với .catch()

// fetch(url).then().catch()

fetch(url).then(response => {
    console.log("Received response");
    response.json().then(data => {
        console.log('change response to json object')
    })
}).catch(error => {
     console.log('error :' +error)
})

console.log("do other tasks");
```
### Luồng chạy:
    - chạy console.log("Received response");
    - chạy console.log("do other tasks");
    - Cuối cùng chạy hàm fetch
        - Hai trường hợp xảy ra:
            + thành công: thực thi lệnh bên trong
            + thất bại: ném ra lỗi




Now do 2 asynchronous tasks - Thực hiện 2 hàm bất đồng bộ
```JS
// Định nghĩa hai biến urlGetEntries và urlGetCategories để lưu trữ URL của hai API cần truy cập.
const urlGetEntries = 'https://api.publicapis.org/entries'
const urlGetCategories = 'https://api.publicapis.org/categories'

// Sử dụng console.log để in ra thông điệp "Begin sending status". Đây là một thông báo đang được gửi trước khi gửi các yêu cầu.
console.log("Begin sending status")

// Khai báo một hàm bất đồng bộ fetchDataFromAPIServer(url) để gửi yêu cầu HTTP đến một URL cụ thể. Hàm này trả về một Promise để xử lý kết quả của yêu cầu.
async function fetchDataFromAPIServer(url){
    return new Promise((resolve, reject) => {
        console.log("Begin sending request")
        fetch(url).then(response => {
            console.log('recevied response')
            response.json().then(data => {
                console.log('changed response to json object')
                resolve({result: data,error: '', message: 'Fetch data successfully'})
            })
        }).catch(error => {
            console.log('error:' +error)
            reject({error: error, message: 'Cannot get data because ....'})
        })
    })

}

fetchDataFromAPIServer(urlGetEntries).then(result => {
    // debugger
}).catch(error => {
    // debugger
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

```

Tổng quan, đoạn mã trên thực hiện việc gửi yêu cầu HTTP đến hai API khác nhau bằng cách sử dụng fetch() và xử lý kết quả bằng cách sử dụng Promises và từ khóa await để thực hiện các tác vụ bất đồng bộ theo thứ tự nhất định.


---

Lập trình bất đồng bộ javascript

Promise, Callback, Async/await.

Callbacks:

```JS
// Create an Array - Tạo ra 1 mảng
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback - Biến để, gán cho nó kết quả sau khi sử dụng callbacks gọi hàm.
// Nó nhận vào 2 đối số. Thứ 1 là mảng myNumbers và thứ 2 là arrow functions. 2 Đối số này sẽ được truyền đến hàm removeNeg để làm tham số.
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result - Hiển thị kết quả
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
// Hàm này khi được gọi nhận vào 2 tham số đã được truyền từ nơi gọi
function removeNeg(numbers, callback) {
  // biến này sẽ là lưu trữ các kết quả sau khi lặp được
  const myArray = [];
  // dùng vòng lặp lặp qua từng phần tử trong mảng   
  for (const x of numbers) {
    // từng phần tử trải qua khâu if để kiểm duyệt xem có là số dương không nếu hải mới được thêm vảo mảng mới
    if (callback(x)) {
      myArray.push(x);
    }
  }
  // Trả về cái mảng sau khi đã được lặp và kiểm duyệt.   
  return myArray;
}
```

In the example above, (x) => x >= 0 is a callback function. - Trong ví dụ trên hàm (x) => x >= 0 là 1 callbacks function

It is passed to removeNeg() as an argument. Dữ liệu truyền vào chỗ gọi hàm removeNeg() là các đối số.

When to Use a Callback? - khi nào dùng callbacks

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

Callbacks được áp dụng khi một hàm đợi một hàm khác thực thi xong rồi hàm đó mới thực thi.

---

Asynchronous JavaScript - Bất Đồng bộ trong JavaScript.

Functions running in parallel with other functions are called asynchronous - Hàm chạy song song với 1 hàm khác gọi là bất đồng bộ.

Một ví dụ điển hình cho ví dụ bất đồng bộ JS là: setTimeout()

Waiting for a Timeout

When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
Khi sử dụng hàm JavaScript setTimeout(), bạn có thể chỉ định hàm gọi lại sẽ được thực thi khi hết thời gian chờ:

```JS
setTimeout(myFunction, 3000); // đối số truyền vào là 1 hàm, và số giây 3000 (mili gây) = 3s

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```
Sau 3 giây sẽ in ra "I love You !!";

In the example above, myFunction is used as a callback. - Trong ví dụ trên, myFunction được sử dụng như 1 callback

myFunction is passed to setTimeout() as an argument. - myFunction truyền vào hàm setTimeout() như 1 đối số

3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds. - 3000 là số mili giây sẽ bắt đầu gọi hàm khi việc đếm ngược kết thúc.

Note: When you pass a function as an argument, remember not to use parenthesis. - Khi bạn truyền 1 function vào làm đối số, hãy nhớ rằng không sử "dấu ngoặc đơn".

Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
Thay vì chuyển tên của hàm làm đối số cho hàm khác, bạn luôn có thể chuyển toàn bộ hàm:

```JS
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
```

sau 3s sẽ thực hiện gọi hàm

Waiting for Intervals:

When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
Khi sử dụng hàm JavaScript setInterval(), bạn có thể chỉ định hàm gọi lại sẽ được thực thi cho mỗi khoảng thời gian:

```JS
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
```

In the example above, myFunction is used as a callback. - Trong ví dụ, myFunction sẽ được sử dụng như 1 callback

myFunction is passed to setInterval() as an argument. - myFunction truyền đã truyền vào setInterval như 1 đối số

1000 is the number of milliseconds between intervals, so myFunction() will be called every second.
1000 số mili giây, vì vậy sau khoảng thời gian được "đặt" myFunction() sẽ được gọi.

Callback Alternatives - Các lựa chọn thay thế gọi lại

But, asynchronus programmes are difficult to write and difficult to debug.
Tuy nhiên, các chương trình không đồng bộ rất khó viết và khó gỡ lỗi.

Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.

Vì lý do này, hầu hết các phương thức JavaScript không đồng bộ hiện đại đều không sử dụng lệnh gọi lại. Thay vào đó, trong JavaScript, việc lập trình không đồng bộ được giải quyết bằng cách sử dụng Promise.

---
JavaScript Promises - JavaScript Lời hứa.

"I Promise a Result!" - Tôi hứa là 1 kết quả

"Producing code" is code that can take some time - 
"Consuming code" is code that must wait for the result - 
A Promise is a JavaScript object that links producing code and consuming code

JavaScript Promise Object - Lời hứa là 1 object

A JavaScript Promise object contains both the producing code and calls to the consuming code:

Đối tượng Promise JavaScript chứa cả mã "producing"-"sản xuất" và lệnh gọi đến mã "consuming"-tiêu thụ:

```JS
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time) - Có thể mất một thời gian

  myResolve(); // when successful 
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise) - Phải chờ một lời hứa được thực hiện
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
When the producing code obtains the result, it should call one of the two callbacks:
Khi code được sản xuất có được kết quả, nó sẽ gọi 1 trong 2 hàm sau:

Success         myResolve(result value)
Error           myReject(error object)


Promise Object Properties - Thuộc tính đối tượng lời hứa.

A JavaScript Promise object can be: - Một đối tượng JavaScript Promise có thể: 

- Pending - Đang xử lý.
- Fulfilled - Thành công
- Rejected - Thất bại

The Promise object supports two properties: state and result. - Đối tượng lời hứa hỗ trợ 2 thuộc tính: trạng thái và kết quả.

While a Promise object is "pending" (working), the result is undefined. - Trong khi 1 đối tượng Promise đang "pending" (đang xử lý), kết quả thì undefined.

When a Promise object is "fulfilled", the result is a value. - Khi đối tượng Promise là "fulfilled" - hoàn thành, kết quả là 1 giá trị.

When a Promise object is "rejected", the result is an error object. - Khi đối tượng Promise là "rejected" - thất bại, kết quả là 1 đối tượng lỗi.

| myPromise.state | myPromise.result |
| --------------- | ---------------- |
| "pending"       | undefined        |
| "fulfilled"     | a result value   |
| "rejected"      | an error object  |

You cannot access the Promise properties state and result. - Bạn không thể truy cập trạng thái và kết quả thuộc tính Promise.

You must use a Promise method to handle promises. - Bạn phải sử dụng phương thức Promise để xử lý các lời hứa.

Promise How To - Lời hứa làm thế nào.

```JS
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

Promise.then() takes two arguments, a callback for success and another for failure. - Promise.then() nhận hai đối số, một đối số gọi lại để thành công và một đối số khác cho thất bại.

Both are optional, so you can add a callback for success or failure only. - Cả hai đều là tùy chọn, vì vậy bạn chỉ có thể thêm lệnh gọi lại cho thành công hoặc thất bại.

```JS
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

JavaScript Promise Examples

To demonstrate the use of promises, we will use the callback examples from the previous chapter:

Waiting for a Timeout - Đang chờ thời gian chờ
Waiting for a File - Đang chờ một tập tin

Example Using Promise

```JS
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});
```
Waiting for a file - Chờ đợi một file

```JS
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.htm");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

---

Javascript Async - Không đồng bộ

"async and await make promises easier to write"

Async Syntax: - Cú pháp không đồng bộ

The keyword async before a function makes the function return a promise:
Từ khóa async đứng trước 1 hàm làm chó kết quả trả về là 1 lời hứa:

```JS
async function myFunction() {
  return "Hello";
}
```
2 này có chức năng giống nhau, chỉ khác cú pháp

```JS
function myFunction() {
  return Promise.resolve("Hello");
}
```

Một ví dụ khác

```JS
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// Một hàm dùng có async đứng trước là 1 lời hứa
async function myFunction() {return "Hello";}

// sau khi có kết quả trả về gọi hàm .then tiếp tục chạy, tất nhiên giá trị trả về được đem làm đối số truyền vào
// Đối số truyền vào được đưa vào trong phần thực hiện code gọi hàm và truyền làm số việc gọi 1 hàm khác để in ra kết quả ra màn hình
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
)
```


Await Syntax

The await keyword can only be used inside an async function. - Từ khóa chờ đợi chỉ có thể được sử dụng bên trong hàm async.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
Từ khóa chờ đợi làm cho hàm tạm dừng việc thực thi và chờ một lời hứa được giải quyết trước khi tiếp tục:

```js
let value = await promise;
```

Let's go slowly and learn how to use it.

```js
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

Có thểm thêm hoặc bỏ bớt đối số reject, nhưng đa phần trong thực tế thì nên có reject để in ra các trường hợp bị từ chỗi

```JS
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

Ví dụ khác

```JS
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
```
