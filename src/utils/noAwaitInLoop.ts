// 4. no-await-in-loop
import { CODE_TABS } from "../constants/codeExamples";

type Photo={
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}


const fetchPhoto=(id:number):Promise<Photo>=>{
    return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(response=>response.json()).then(data=>data)
}




async function badCode ():Promise<Photo[]>{
    //BAD CODE
    const photosIds=[100,200,300]
    const photos:Photo[]=[]
    for(const id of photosIds){
        photos.push(await fetchPhoto(id))
    }
    return photos
}

async function goodCode():Promise<Photo[]>{ 
    //GOOD CODE
    const photosIds=[400,500,600]
    const photos:Promise<Photo>[]=[]
    for(const id of photosIds){
        photos.push(fetchPhoto(id))
    }
const result= await Promise.all(photos)
console.log("Good Code",result)
return result
}

export default {
    [CODE_TABS.BAD_CODE]:badCode,
    [CODE_TABS.GOOD_CODE]:goodCode
}