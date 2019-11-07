// 題目說明: 請使用套件readline-sync跟node-qrcode，輸入文字來產生QRCODE
// 輸入說明: 請打上任意文字，並產生QRCODE
// 輸出說明: 請輸出檔名為QRCODE.png圖片
import * as readlineSync from 'readline-sync';
import * as QRCode from 'qrcode';
let context = readlineSync.question('Please key-in you want ');
QRCode.toFile('./QRCODE.png',context);//產生qrcode