var json_data = ""; 
//乾糧
var navbar_btn1=document.querySelector("#navbar_btn1");
navbar_btn1.addEventListener("click", function() {
    fetch('https://data.moa.gov.tw/api/v1/PetFood/?fitem=乾飼糧') // 或線上 API: fetch('https://api.example.com/data')
    .then(response => response.json()) // 解析 JSON
    .then(data => {
        // json_data = data; // 正確存入 JSON 資料
        console.log(json_data); // 顯示 JSON 資料
        show_card_data(data.Data);
    })
    .catch(error => console.error('Error:', error));
});

//生鮮、冷凍
var navbar_btn2=document.querySelector("#navbar_btn2");
navbar_btn2.addEventListener("click", function() {
    fetch('https://data.moa.gov.tw/api/v1/PetFood/?fitem=生鮮、冷凍') // 或線上 API: fetch('https://api.example.com/data')
    .then(response => response.json()) // 解析 JSON
    .then(data => {
        // json_data = data; // 正確存入 JSON 資料
        console.log(json_data); // 顯示 JSON 資料
        show_card_data(data.Data);
    })
    .catch(error => console.error('Error:', error));
});

//半濕性飼料
var navbar_btn3=document.querySelector("#navbar_btn3");
navbar_btn3.addEventListener("click", function() {
    fetch('https://data.moa.gov.tw/api/v1/PetFood/?fitem=半溼性飼糧(水分含量20-35％)') // 或線上 API: fetch('https://api.example.com/data')
    .then(response => response.json()) // 解析 JSON
    .then(data => {
        // json_data = data; // 正確存入 JSON 資料
        console.log(json_data); // 顯示 JSON 資料
        show_card_data(data.Data);
    })
    .catch(error => console.error('Error:', error));
});

//零食
var navbar_btn4=document.querySelector("#navbar_btn4");
navbar_btn4.addEventListener("click", function() {
    fetch('https://data.moa.gov.tw/api/v1/PetFood/?fitem=零食') // 或線上 API: fetch('https://api.example.com/data')
    .then(response => response.json()) // 解析 JSON
    .then(data => {
        // json_data = data; // 正確存入 JSON 資料
        console.log(json_data); // 顯示 JSON 資料
        show_card_data(data.Data);
    })
    .catch(error => console.error('Error:', error));
});

//潔牙骨
var navbar_btn5=document.querySelector("#navbar_btn5");
navbar_btn5.addEventListener("click", function() {
    fetch('https://data.moa.gov.tw/api/v1/PetFood/?fitem=潔牙骨') // 或線上 API: fetch('https://api.example.com/data')
    .then(response => response.json()) // 解析 JSON
    .then(data => {
        // json_data = data; // 正確存入 JSON 資料
        console.log(json_data); // 顯示 JSON 資料
        show_card_data(data.Data);
    })
    .catch(error => console.error('Error:', error));
});

//補助食品
var navbar_btn6=document.querySelector("#navbar_btn6");
navbar_btn6.addEventListener("click", function() {
    fetch('https://data.moa.gov.tw/api/v1/PetFood/?fitem=補助食品') // 或線上 API: fetch('https://api.example.com/data')
    .then(response => response.json()) // 解析 JSON
    .then(data => {
        // json_data = data; // 正確存入 JSON 資料
        console.log(json_data); // 顯示 JSON 資料
        show_card_data(data.Data);
    })
    .catch(error => console.error('Error:', error));
});

function show_card_data(data){
    var card_row=document.querySelector("#card_row");
    var html_str="";
    console.log(data[0]);
    for(var i=0;i<10;i++){
        var data_tmp=data[i];
        // console.log(data_tmp[0]);
        // console.log(data_tmp.fname); // 確保 `data[i]` 是物件或陣列
        html_str+=`<div class=\"col-sm-12 mb-3 col-md-3\">
                         <div class=\"card\">
                            <img src="https://fakeimg.pl/800x300/"
                                class="card-img-top" alt="飼料圖">
                             <div class=\"card-body\">
                                 <h5 class=\"card-title\">${data_tmp.fname}</h5>
                                 <p class=\"card-text\">${data_tmp.fmat}</p>
                                 <a href=\"#\" class=\"btn btn-primary\">看詳細</a>
                             </div>
                         </div>
                     </div>`;
    }
    
    // data.forEach(item => { // 如果 JSON 是陣列
    //     html_str+=`<div class=\"col-3 mb-3\">
    //                     <div class=\"card\">
    //                         <img src="https://fakeimg.pl/800x300/"
    //                             class="card-img-top" alt="飼料圖">
    //                         <div class=\"card-body\">
    //                             <h5 class=\"card-title\">${item.fname}</h5>
    //                             <p class=\"card-text\">${item.fitem}</p>
    //                             <a href=\"#\" class=\"btn btn-primary\">看詳細</a>
    //                         </div>
    //                     </div>
    //                 </div>`;
    //     // console.log("食品名稱:", item.fname);
    //     // console.log("食品種類:", item.fitem);
    //     // console.log("原產地:", item.forigin);
    //     // console.log("廠商名稱:", item.flegalname);
    //     // console.log("使用方法:", item.fusage2);
    //     // console.log("保存方法:", item.fusage3);
    //     // console.log("----------------------------");
    // });
    card_row.innerHTML=html_str;


}