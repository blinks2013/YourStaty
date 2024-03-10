import {
    registerDecorator,
    ValidationArguments
  } from "class-validator";
import { validateContactNumber } from "src/module/user/constants/country-code.constant";
  
  export function IsSaudiNumber() {
    return function (object: Object, propertyName: string) {
        registerDecorator({
          name: "isSaudiNumber",
          target: object.constructor,
          propertyName: propertyName,
          constraints: [],
          validator: {
              validate(value : any, arg: ValidationArguments){
                  const contactNumber=validateContactNumber(arg);
                  return true;
              },
              defaultMessage(){
                return "please enter valid moblie number,number must be  start with +966"
              }
          },
      });
    };
  }