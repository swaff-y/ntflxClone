import { putObj } from "./redux/apiCall";

const BUCKET_URL = process.env.REACT_APP_BUCKET_URL;

const featured = null;

function getVideoImage(path, secs, callback) {
    var me = this, video = document.createElement('video');
    video.onloadedmetadata = function() {
        // if ('function' === typeof secs) {
        //     secs = secs(this.duration);
        // }
        // this.currentTime = Math.min(Math.max(0, (secs < 0 ? this.duration : 0) + secs), this.duration);
        if(secs === 1)
            this.currentTime = 3;
        if(secs === 2)
            this.currentTime = this.duration / 2;
        if(secs === 3)
            this.currentTime = this.duration - 3;
    };
    video.onseeked = function(e) {
        var canvas = document.createElement('canvas');
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        var img = new Image();
        img.src = canvas.toDataURL("image/jpeg",0.2);
        img.crossOrigin="anonymous";
        // console.log("%cThe src","color:orange;font-size:20px;", img.src)
        callback.call(me, img, this.currentTime, e, this.duration);
    };
    video.onerror = function(e) {
        callback.call(me, undefined, undefined, e);
    };
    video.src = path;
    video.crossOrigin="anonymous";
};
function showImageAt(url, id, count) {
    if(!count) return;
    var duration;
    getVideoImage(
        url,
        count,
        function(img, secs, event, duration) {
            if (event.type == 'seeked') {
                // console.log(`%cThe Img at ${secs} for ${duration}:`, "color:orange; font-size:18px;", img.src)
                if (count === 1) {
                    putObj(id,{one: img.src});
                };
                if (count === 2) {
                    putObj(id,{two: img.src});
                };
                if (count === 3) {
                    putObj(id,{three: img.src});
                };
            }
        }
    );
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

export const randomArray = (arr, length) => {

    if(arr.length === 0) return;

    const retArr = [];
    let i = 0;
    
    while (i < length){
        const int = getRandomInt(0,arr.length);

        if(i == 0){
            retArr?.push(arr[int]);
            i++;
        } else {
            const obj = arr[int];
            if(!retArr?.find((item)=>{ return item == obj })) {
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
        if(!retArr.find((it)=>{ return it === item.name })) {
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

export const sortArray = (arr) => {

    function compare( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
    }

    return arr.sort(compare);
};

export const checkForImages = (obj) => {
    if(!obj.one){
        // console.log("%cONE", "color:green; font-size:18px", obj);
        showImageAt(BUCKET_URL + obj.url, obj._id, 1);
    }
    if(!obj.two){
        // console.log("%cONE", "color:green; font-size:18px", obj);
        showImageAt(BUCKET_URL + obj.url, obj._id, 2);
    }
    if(!obj.three){
        // console.log("%cONE", "color:green; font-size:18px", obj);
        showImageAt(BUCKET_URL + obj.url, obj._id, 3);
    }
};

export const getFeatured = (arr) => {
    let index = getRandomInt(0,arr?.length);
    if(arr?.[index]?.two && !featured)
        return arr[index];
    else if( featured )
        return featured;
    // else
        // getFeatured(arr);
}