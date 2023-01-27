const etudiants = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ]

    let l1=etudiants.filter(note_e)

    function note_e (etudiants){
        return (etudiants.note != undefined);
    }
    //console.log(l1)




    let totalNotes = l1.reduce((acc, current) => acc + current.note, 0);
    let nombreEtudiant = l1.length;
    let moyenne = totalNotes / nombreEtudiant;
   // console.log(moyenne);

 function FailedStudent(l1){
    let l2=l1.map(function(e){
       if (e.note >= moyenne){
        e.mention = "Bien"
       } else{ 
        e.mention="passable"
       } return e;
         
    })
    return l2 ;

}
  //  console.log(FailedStudent(l1))




