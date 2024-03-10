import {
    registerDecorator,
  } from "class-validator";
  
  export function IsSaudiNumber() {
    return function (object: Object, propertyName: string) {
        registerDecorator({
          name: "isSaudiNumber",
          target: object.constructor,
          propertyName: propertyName,
          constraints: [],
          validator: {
              validate(value:any) {

                if(value.startsWith("+966") && value.length===14){
                    return true;
                }
              },
              defaultMessage(){
                return "please enter valid moblie number,number must be  start with +966"
              }
          },
      });
    };
  }