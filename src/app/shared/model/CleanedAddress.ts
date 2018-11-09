import {Address} from './Address';


export class CleanedAddressWapper {
  public id: String;  // 该字段使用fullAddress经过Md5计算生成

  public fullAddress: String; // 清洗之前的详细地址

  public right: number;   // 标记地址清洗结果的准确性。1表示准确，0表示未知，-1表示错误

  public tag: String;  // 标记，标记地址清洗结果的关系

  public address: Address;
}
