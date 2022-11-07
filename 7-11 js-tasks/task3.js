var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterInArray(strings){
    var shortner=strings[0].length;
    let x=0 ;
    for(let i=1;i<strings.length;i++){
        if(strings[i].length < shortner){shortner=strings[i].length;x=i;}
    }
    return strings[x];
}
document.write(shorterInArray(strings));
