document.write(typeof String(3))
document.write('\<br>')
document.write(isNaN(213))
document.write('\<br>')
document.write(isNaN('33s'))
document.write('\<br>')
document.write('<div id="no">2E310</div>')
document.write('\<br>')
document.write(-2E310)
document.write('\<br>')
document.write(Number((document.getElementById("no").innerHTML)))
document.write('\<br>')
document.write(34>231)
document.write('\<br>')
document.write(-321<231)
document.write('\<br>')
console.log(34>231+234)
document.write('\<br>')
document.write(-321==231)
document.write('\<br>')

document.write('\<br>')
document.write("This section is about testing === sign")
document.write('\<br>')



document.write('\<br>')
document.write("20===20")
document.write('\<br>')
document.write(20===20)
document.write('\<br>')

document.write('\<br>')
document.write('20 === "steve"')
document.write('\<br>')
document.write(20 === "steve")
document.write('\<br>')

document.write('\<br>')
document.write('10 === "10"')
document.write('\<br>')
document.write(10 === "10")
document.write('\<br>')

document.write('\<br>')
document.write("20===21")
document.write('\<br>')
document.write(20===21)
document.write('\<br>')

document.write('\<br>')
document.write("Use of AND and OR operator")
document.write('\<br>')



document.write('\<br>')
document.write('23>2 AND 32>3')
document.write('\<br>')
document.write(23>2 && 32>3)
document.write('\<br>')

document.write('\<br>')
document.write('23>2 AND 32>323')
document.write('\<br>')
document.write(23>2 && 32>323)
document.write('\<br>')


document.write('\<br>')
document.write('23>2 OR 32>323')
document.write('\<br>')
document.write(23>2 || 32>323)
document.write('\<br>')



document.write('\<br>')
document.write('23>2 OR 32>3')
document.write('\<br>')
document.write(23>212 || 32>312)
document.write('\<br>')


document.write('\<br>')
document.write('NOT (23>2 OR 32>323)')
document.write('\<br>')
document.write(!(23>2 || 32>323))
document.write('\<br>')



document.write('\<br>')
document.write('NOT(23>2 OR 32>3)')
document.write('\<br>')
document.write(!(23>212 || 32>312))
document.write('\<br>')
