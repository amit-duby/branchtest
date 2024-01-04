export {};
function raise(message:string):never{
   throw new Error(message);
}

function rais(a:string|number):boolean{
    if(typeof a==='string'){
        return true;
    }
    else if(typeof a==='number'){
        return true;
    }
    else{
        return false;
    }
}
