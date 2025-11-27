function enterMarks(){
	document.getElementById("main").innerHTML ="";
	subjectCount= Number(prompt("How many subjects did you take?"));
	
	let marks=[];
	total=0;
	
    for (i = 0; i < subjectCount; i++) {
        mark = Number(prompt("Enter mark for subject " + (i + 1) + ":"));
        marks[i] = mark;
    }

    for (i = 0; i < marks.length; i++) {
        mark = marks[i];

        grade = "";
        if (mark >= 85) {
            grade = "A";
        } else if (mark >= 75) {
            grade = "B";
        } else if (mark >= 60) {
            grade = "C";
        } else if (mark >= 40) {
            grade = "D";
        } else {
            grade = "Fail";
        }

        total = total + mark;

        document.getElementById("main").innerHTML +=
            "Subject " + (i + 1) + ": " + mark + " - Grade: " + grade + "<br>";
    }

    average = total / subjectCount;
    average = Math.round(average);

    overallGrade = "";
    if (average >= 85) {
        overallGrade = "A";
    } else if (average >= 75) {
        overallGrade = "B";
    } else if (average >= 60) {
        overallGrade = "C";
    } else if (average >= 40) {
        overallGrade = "D";
    } else {
        overallGrade = "Fail";
    }

    document.getElementById("main").innerHTML += "<br>Total Marks: " + total + "<br>";
    document.getElementById("main").innerHTML += "Overall Average: " + average + "<br>";
    document.getElementById("main").innerHTML += "Overall Grade: " + overallGrade;
}