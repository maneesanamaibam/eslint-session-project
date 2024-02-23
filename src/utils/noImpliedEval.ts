// 2.no-implied-eval

import { CODE_TABS } from "../constants/codeExamples";

function badCode():void{
// BAD CODE 
 setTimeout("alert('Hi! BAD CODE');", 100); 
}

function goodCode():void{
// GOOD CODE 
 setTimeout(() => { 
  alert("Hi! GOOD CODE"); 
 }, 100); 
}
export default {
    [CODE_TABS.BAD_CODE]:badCode,
    [CODE_TABS.GOOD_CODE]:goodCode
}