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
            if(!retArr?.find((item)=>{ return item.name == obj.name })){
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
            return it.name === item.name
        })){
            retArr.push(item);
        }
    });
    return retArr;
}