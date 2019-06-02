/**
 * 数字大小写转换的方法
 * **/
export function RMBConversion (data) {
  let fraction = ['角', '分']
  let unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']]
  let capNumArray = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  let s = ''
  // fraction.map(i => {
  //   console.log(i)
  //   console.log(Math.floor(data * 10 * Math.pow(10, i + 1)) % 10)
  //   // console.log(capNumArray[Math.floor(data * 10 * Math.pow(10, i)) % 10])
  //   // s += (capNumArray[Math.floor(data * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  // })
  for (var i = 0; i < fraction.length; i++) {
    console.log(Math.pow(10, i))
    s += (capNumArray[Math.floor(data * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  data = Math.floor(data)
  unit[0].map(i => {
    let p = ''
    unit[1].map(j => {
      p = capNumArray[data % 10] + unit[i][j] + p
      data = Math.floor(data / 10)
    })
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  })
  return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
}

export function digitUppercase (n) {
  var fraction = ['角', '分']
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']]
  var head = n < 0 ? '欠' : ''
  n = Math.abs(n)
  var s = ''
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (var l = 0; l < unit[0].length && n > 0; l++) {
    var p = ''
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][l] + s
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
}

export function small2big (data) {
  let result = ''
  let capNumArray = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  let doubleUnit = ['壹拾', '贰拾', '叁拾']
  let numberData = data.split('')
  console.log('数组', numberData)
  if (numberData.length === 2 && numberData[1] === '0') {
    console.log(1)
    result = doubleUnit[numberData[0] - 1]
  } else if (numberData.length === 2 && numberData[1] !== '0' && numberData[0] !== '0') {
    console.log(2)
    result = doubleUnit[numberData[0] - 1] + capNumArray[numberData[1]]
  } else {
    console.log(3)
    numberData.forEach(val => {
      result += capNumArray[val]
    })
  }
  return result
}
