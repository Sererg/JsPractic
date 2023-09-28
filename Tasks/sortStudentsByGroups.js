const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Bris', 'Sandra', 'Cris', 'Tris', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    // console.log(arr.sort())

    for (let i = 0; i < students.length+1; i++ ){
        let studSort = (arr.sort().slice(i, i + 3));
        i += 2
       
        if (studSort[0,1,2] != undefined) {
             console.log(studSort)
            //  console.log("1") 
        } else if (studSort == false) {
            // console.log("3")
            console.log(`Оставшиеся студенты: -`)
        }else if (studSort[2] == undefined || studSort[1] == undefined) {
            // console.log("2")
            console.log(`Оставшиеся студенты:${studSort}`)
        } 


    }
}
sortStudentsByGroups(students);