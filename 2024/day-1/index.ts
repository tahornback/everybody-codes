import input1 from './input1.ts'
import input2 from './input2.ts'
import input3 from './input3.ts'

function problem1() {
    const result1 = input1.replaceAll("A", '').split('').map(v => v === 'B' ? 1 : 3).reduce((a, b) => a + b, 0)

    console.log(result1) // 1335
}

const ratios = {
    'A': 0,
    'B': 1,
    'C': 3,
    'D': 5,
}

function getPotionCount(enemies: string): number {
    console.log(enemies)
    const x = enemies.replaceAll('x','')
    if(x.length === 0) {
        return 0
    }
    if(x.length === 1) {
        return ratios[x[0]]
    }
    if(x.length === 2) {
        return ratios[x[0]] + ratios[x[1]] + 2
    }
    return ratios[x[0]] + ratios[x[1]] + ratios[x[2]] + 6
}

function problem2() {
    const pairs: string[] = []
    for(let i = 0; i < input2.length; i+=2) {
        pairs.push(input2.substring(i, i+2))
    }
    const result2 = pairs.map(p => getPotionCount(p)).reduce((a, b) => a + b, 0)
    console.log(result2)
}

function problem3() {
    const pairs: string[] = []
    for(let i = 0; i < input3.length; i+=3) {
        pairs.push(input3.substring(i, i+3))
    }
    const result3 = pairs.map(p => {
        const v = getPotionCount(p)
        console.log(v)
        return v
    }).reduce((a, b) => a + b, 0);   console.log(result3)
}

problem3()
