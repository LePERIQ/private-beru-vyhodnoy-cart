const { default: axios } = require("axios");

async function dataBeerShop(id) {
   const res = await axios('https://beruvyhodnoy.ru/stock/get/?shop_id='+id)
   return res.data
} 

module.exports = dataBeerShop