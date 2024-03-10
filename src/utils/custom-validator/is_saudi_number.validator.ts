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
              async validate(value : any, arg: ValidationArguments){
                  const contactNumber= await validateContactNumber(arg.object);
                  if(contactNumber){
                    return true;
                  }
              },
              defaultMessage(){
                return "please enter a valid coutry code ,code and number"
              }
          },
      });
    };
  }