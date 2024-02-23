
export enum ExampleESLintRuleNames {
  NO_ARRAY_SORT_COMPARE = "require-array-sort-compare",
  NO_IMPLIED_EVAL = "no-implied-eval",
  PREFER_OPTIONAL_CHAIN = "prefer-optional-chain",
  NO_AWAIT_IN_LOOP = "no-await-in-loop",
}

export enum CODE_TABS {
  BAD_CODE = "badCode",
  GOOD_CODE = "goodCode",
}
type ExampleCode = {
  [key in CODE_TABS as `${key}Example`]: string;
};

type CodeExample ={ 
  description: string;
  ruleName: ExampleESLintRuleNames;
} & ExampleCode 


export const codeExamples: {
  [key in ExampleESLintRuleNames]: CodeExample;
}  = {
  [ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE]: {
    ruleName: ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE,
    [`${CODE_TABS.BAD_CODE}Example`]: `
    //BAD CODE [newline]
    const arr: number[] = [1,12,110,23]; [newline]
    arr.sort(); [newline]
    `,
    [`${CODE_TABS.GOOD_CODE}Example`]: `
    // GOOD CODE [newline]
     const arr: number[] = [1,12,110,23]; [newline]
     const compareFn = (a: number, b: number) => a - b; [newline]
     arr.sort(compareFn); [newline]
    `,
    description: ``,
  },
  [ExampleESLintRuleNames.NO_IMPLIED_EVAL]: {
    ruleName: ExampleESLintRuleNames.NO_IMPLIED_EVAL,
    [`${CODE_TABS.BAD_CODE}Example`]: `
// BAD CODE [newline]
 setTimeout("alert('Hi! BAD CODE');", 100); [newline]
    `,
    [`${CODE_TABS.GOOD_CODE}Example`]: `
    // GOOD CODE [newline]
    setTimeout(() => { [newline]
     alert("Hi! GOOD CODE"); [newline]
    }, 100); [newline]
    `,
    description: ``,
  },
  [ExampleESLintRuleNames.PREFER_OPTIONAL_CHAIN]: {
    ruleName: ExampleESLintRuleNames.PREFER_OPTIONAL_CHAIN,
    [`${CODE_TABS.BAD_CODE}Example`]: `
    // BAD CODE [newline]
    type ExampleObject={ [newline]
      a?: {  b?: {  c: string   }  } [newline]     
  } [newline]
   
    const obj:ExampleObject = {  [newline]
      a: { b: {   [newline]
        c: "I am returning from ExampleObject as string [BAD CODE]" [newline]
      } } [newline]
    }; [newline]  
    const val = obj && obj.a && obj.a.b && obj.a.b.c; [newline]
     `,
     [`${CODE_TABS.GOOD_CODE}Example`]: `
    // GOOD CODE [newline]
    type ExampleObject={ [newline]
      a?: {  b?: {  c: string   }  } [newline]     
  } [newline]
    const obj:ExampleObject = {  [newline]
      a: { b: {   [newline]
        c: "I am returning from ExampleObject as string [GOOD CODE]" [newline]
      } } [newline]
    }; [newline] 
    const val = obj?.a?.b?.c; [newline]
    `,
    description: ``,
  },

  [ExampleESLintRuleNames.NO_AWAIT_IN_LOOP]: {
    ruleName: ExampleESLintRuleNames.NO_AWAIT_IN_LOOP,
    [`${CODE_TABS.BAD_CODE}Example`]: `
    // BAD CODE [newline]
type Photo={ [newline]
  albumId: number; [newline]
  id: number; [newline]
  title: string; [newline]
  url: string; [newline]
  thumbnailUrl: string; [newline]
} [newline]
const fetchPhoto=(id:number):Promise<Photo>=>{ [newline] 
  return fetch("https://jsonplaceholder.typicode.com/photos/"+id) [newline]
  .then(response=>response.json()) [newline]
} [newline]
const photosIds=[100,200,300] [newline]

 const photos:Photo[]=[] [newline]
 for(const id of photosIds){ [newline]
     photos.push(await fetchPhoto(id)) [newline]
 } [newline]
 return photos [newline]
    `,
    [`${CODE_TABS.GOOD_CODE}Example`]: `
    // GOOD CODE [newline]
    type Photo={ [newline]
      albumId: number; [newline]
      id: number; [newline]
      title: string; [newline]
      url: string; [newline]
      thumbnailUrl: string; [newline]
    } [newline]
    const fetchPhoto=(id:number):Promise<Photo>=>{ [newline]
      return fetch("https://jsonplaceholder.typicode.com/photos/"+id) [newline]
      .then(response=>response.json()) [newline]
    } [newline]
    const photosIds=[400,500,600] [newline]
    
    const photos:Promise<Photo>[]=[] [newline]
    for(const id of photosIds){ [newline]
        photos.push(fetchPhoto(id)) [newline]
    } [newline]
    return  await Promise.all(photos) [newline]
    `,
    description: ``,
  }

};
