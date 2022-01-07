
// クトゥルフ第６版から第７版への変換よう計算式
function getDBonus(targetValue) {
  let result = "";

  if ((2 <= targetValue) && (targetValue <= 64)) {
    result = "-1D6";
  } else if ((65 <= targetValue) && (targetValue <= 84)) {
    result = "-1D4";
  } else if ((85 <= targetValue) && (targetValue <= 124)) {
    result = "0";
  } else if ((125 <= targetValue) && (targetValue <= 164)) {
    result = "+1D4";
  } else if ((165 <= targetValue) && (targetValue <= 204)) {
    result = "+1D6";
  } else if ((205 <= targetValue) && (targetValue <= 284)) {
    result = "+2D6";
  } else if ((285 <= targetValue) && (targetValue <= 364)) {
    result = "+3D6";
  } else if ((265 <= targetValue) && (targetValue <= 444)) {
    result = "+3D6";
  } else if ((445 <= targetValue) && (targetValue <= 524)) {
    result = "+3D6";
  }

  return result;
}

// ビルドを計算
function getBuild(targetValue){
  let result = "";

  if ((2 <= targetValue) && (targetValue <= 64)) {
    result = "-2";
  } else if ((65 <= targetValue) && (targetValue <= 84)) {
    result = "-1";
  } else if ((85 <= targetValue) && (targetValue <= 124)) {
    result = "0";
  } else if ((125 <= targetValue) && (targetValue <= 164)) {
    result = "+1";
  } else if ((165 <= targetValue) && (targetValue <= 204)) {
    result = "+2";
  } else if ((205 <= targetValue) && (targetValue <= 284)) {
    result = "+3";
  } else if ((285 <= targetValue) && (targetValue <= 364)) {
    result = "+4";
  } else if ((265 <= targetValue) && (targetValue <= 444)) {
    result = "+5";
  } else if ((445 <= targetValue) && (targetValue <= 524)) {
    result = "+6";
  }

  return result;
}

// MOV計算
function getMov(dex, str, size){
  let result = "";

  if(dex < size && str < size){
    result = "7";
  } else if(dex > size && str > size){
    result = "9";
  } else if(dex >= size || str >= size){
    result = "8"
  }

  return result;
}

// ダイスロール
function droll(times, dice_range, cell){
  let sheet=SpreadsheetApp.getActiveSheet();
  let rndNum = 0;
  for(let i = 0; i < times; i++){
    rndNum += Math.floor(Math.random()*dice_range+1);
  }
  return sheet.getRange(cell).setValue(rndNum);
}

// 幸運の値を3D6で取得
function getLuck(){
  return droll(3,6,"J4");
}

