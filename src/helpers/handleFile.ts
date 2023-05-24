import { ITargetStructure } from "../../Abstract/TargetStructure/targetStructure";


export const readTextFile = (
        file: File, 
        stateSetter: React.Dispatch<string>
    ) => {

    if(!file) return

    const reader = new FileReader
    reader.readAsText(file); 
    reader.onload = () => {

        stateSetter(reader.result ? 
            reader.result.toString() :
            ""); 
           
    }

}

export function csvToArr(stringVal: string, splitter: string): ITargetStructure {
    // const [keys, ...rest] = stringVal.toString()
    //   .trim()
    //   .split("\r")
    //   .map((item) => item.split(splitter));
  
    // const formedArr = rest.map((item) => {
    //   const object = {};
    //   keys.forEach((key, index) => (object[key] = item.at(index)));
    //   return object;
    // });

    // return formedArr;
  }
  