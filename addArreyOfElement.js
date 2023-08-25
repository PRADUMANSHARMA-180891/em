
const addElement = [2,4,3,1,4]
const addArreyOfElement =(addElement)=>{

    const addelement = addElement.reduce((pre,cur)=>{
        return pre + cur
    });
     return addelement
}

console.log(addArreyOfElement(addElement))