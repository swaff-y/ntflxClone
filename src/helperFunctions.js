export const randomArray = (arr, length) => {

    if(arr.length === 0) return;

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const retArr = [];
    let i = 0;
    
    while (i < length){
        const int = getRandomInt(0,arr.length);

        if(i == 0){
            retArr?.push(arr[int]);
            i++;
        } else {
            const obj = arr[int];
            if(!retArr?.find((item)=>{ return item == obj })){
                retArr?.push(obj);
                i++;
            }
        }
    }
    return retArr;
}

export const uniqueArray = (arr) => {
    const retArr = [];

    arr.forEach((item)=>{
        if(!retArr.find((it)=>{
            return it === item.name
        })){
            retArr.push(item.name);
        }
    });
    return retArr;
}

export const getObjs = (arr, name) => {
    return arr.filter((item)=>{
        return item.name === name;
    })
}

export const splitCamelCase = (str) => {
    if(typeof str !== "string") return;
    let string = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return string.charAt(0).toUpperCase() + string.slice(1);
}