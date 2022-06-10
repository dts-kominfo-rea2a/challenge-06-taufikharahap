// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
    file1 = val;
};
let modifyFile2 = (val) => {
    file2 = val;
};
let modifyFile3 = (val) => {
    file3 = val;
};

const { hasSubscribers } = require("diagnostics_channel");
// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallback) => {
    let hasil = [];
    [file1, file2, file3].map((file, index) => {
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                fnCallback(err, null);
            }

            if (index === 0) {
                hasil.push(JSON.parse(data).message.substring(5));
            } else if (index === 1) {
                hasil.push(JSON.parse(data)[0].message.substring(5));
            } else {
                hasil.push(JSON.parse(data)[0].data.message.substring(5));
            }
        });
    });
    setTimeout(() => {
        fnCallback(null, hasil);
    }, 1000);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
    modifyFile1,
    modifyFile2,
    modifyFile3,
    bacaData,
};
