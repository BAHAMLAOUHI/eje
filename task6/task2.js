let str1= 'ahmed&ferah-moez&saadi-fadhel&gadihi';

function FormatToArray( str1 ){
let list=str1.split("-");
 let list2=list.map(function(person){
   let [nom, prenom] = person.split("&");
        return  `{ firstname :  ${nom} , lastname: ${prenom} }`;
}) ; return list2}


console.log(FormatToArray( str1 ))