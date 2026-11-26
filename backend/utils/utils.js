const fs = require("fs");

const findAllData = (url) => {
    try {
        return JSON.parse(fs.readFileSync(url, "utf8"));
    } catch (error) {
        console.log(error);
    }
};

const insertData = (url, data) => {
    try {
        const allusers = findAllData(url);
        allusers.push(data);
        fs.writeFileSync(url, JSON.stringify(allusers, null, 2));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = { findAllData, insertData };