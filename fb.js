function savedata(){
    var name=document.getElementById("name")
    var pass=document.getElementById("pass")
    var student ={
        name: name.value,
        pass: pass.value
    }
    firebase.database().ref('student').push(student)
    window.open("index1.html")
}
