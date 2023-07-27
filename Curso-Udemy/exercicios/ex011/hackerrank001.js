function code(str) {
    if (str.toLowerCase().indexOf("pm") > -1){

        let dateDivided = str.split(':') 
        let firstNumber = Number(dateDivided[0])
        
        if (Number(dateDivided[0]) < 12 ) {
           firstNumber += 12
           dateDivided[0] = firstNumber
        }
        
        console.log(dateDivided.join(":").split('PM').join(" "))
    }else {
        let dateDivided = str.split(':')  
        let firstNumber = Number(dateDivided[0])

        if (Number(dateDivided[0] == 12)) {
            firstNumber = '00'
            dateDivided[0] = firstNumber
            console.log(dateDivided.join(":").split("AM").join(" "))
        } else {
            let data = dateDivided.join(":")
            
            if (Number(dateDivided[0]) < 10) {
                dateDivided[0] = dateDivided[0].padStart(2, '0')
            }
            
            console.log(data.split('AM').join(" "))
        }
    }
}

code('12:00:00AM')