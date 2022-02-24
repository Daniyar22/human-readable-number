module.exports = function toReadable (number) {
    let arr = number.toString().split('')
    let str = []
    let hundreds = ''
    let dozens = ''
  //   let hundreds, dozens, units
    arr.length == 3 ? [hundreds, dozens, units] = arr : arr.length == 2 ? [dozens, units] = arr  : units = arr[0]
      // } else if (arr.length == 2) { let [dozens, units] = arr
      // } else if (arr.length == 1) { let [units] = arr }
  
    if (number == 0) { return 'zero' }
    else { if (dozens == 1) { 
      switch (units) {
          case '1': 
              str.unshift('eleven');
              break;
          case '2': 
              str.unshift('twelve');
              break;
          case '3': 
              str.unshift('thirteen');
              break;
          case '4': 
              str.unshift('fourteen');
              break;
          case '5': 
              str.unshift('fifteen');
              break;
          case '6': 
              str.unshift('sixteen');
              break;
          case '7': 
              str.unshift('seventeen');
              break;
          case '8': 
              str.unshift('eighteen');
              break;
          case '9': 
              str.unshift('nineteen');
              break;
          default: 
              str.unshift('ten');
              break;  
      }
  } else switch (units) {
      case '1': 
          str.unshift('one');
          break;
      case '2': 
          str.unshift('two');
          break;
      case '3': 
          str.unshift('three');
          break;
      case '4': 
          str.unshift('four');
          break;
      case '5': 
          str.unshift('five');
          break;
      case '6': 
          str.unshift('six');
          break;
      case '7': 
          str.unshift('seven');
          break;
      case '8': 
          str.unshift('eight');
          break;
      case '9': 
          str.unshift('nine');
          break;
      default: 
          break;  
  } switch (dozens) {
      case '2': 
          str.unshift('twenty');
          break;
      case '3': 
          str.unshift('thirty');
          break;
      case '4': 
          str.unshift('forty');
          break;
      case '5': 
          str.unshift('fifty');
          break;
      case '6': 
          str.unshift('sixty');
          break;
      case '7': 
          str.unshift('seventy');
          break;
      case '8': 
          str.unshift('eighty');
          break;
      case '9': 
          str.unshift('ninety');
          break;
      default: 
          break; 
  } switch (hundreds) {
      case '1': 
          str.unshift('one hundred');
          break;
      case '2': 
          str.unshift('two hundred');
          break;
      case '3': 
          str.unshift('three hundred');
          break;
      case '4': 
          str.unshift('four hundred');
          break;
      case '5': 
          str.unshift('five hundred');
          break;
      case '6': 
          str.unshift('six hundred');
          break;
      case '7': 
          str.unshift('seven hundred');
          break;
      case '8': 
          str.unshift('eight hundred');
          break;
      case '9': 
      str.unshift('nine hundred');
          break;
      default: 
          break; 
  }
    return str.join(' ') } 
  }
  
  
  // eleven | one | ten | one hundred
  // twelve  |two | twenty | two hundred
  // thirteen | three | thirty | three hundred
  // fourteen | four | fourty | four hundred
  // fifteen | five | fifty | five hundred
  // sixteen | six | sixty | six hundred 
  // seventeen | seven | seventy | seven hundred
  // eighteen | eight | eighty | eight hundred
  // nineteen | nine | ninety | nine hundred 