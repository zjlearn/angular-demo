export class Result{
  scuess: boolean;
  code: number;
  message: String;
  data: any;


  constructor(scuess: boolean, code: number, message: String, data: any) {
    this.scuess = scuess;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
