export class UsefulFunctions {

}


export const valueOrDefault = (value: any, value_default: any) => {
  if (value) return value
  else return value_default
}
