// Code your solution here
function findMatching (arry,str){
     return arry.filter(name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arry,str){
    return arry.filter(names => names.startsWith(str));
}

function matchName(arry,str){
    return arry.filter(obj => obj.name === str);
}