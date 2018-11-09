export class Address {
  public countryName: String;
  public provName: String;
  public cityName: String;
  public distName: String;
  public townName: String;
  public street: String;        // 街道
  public streetNumber: String;  // 街道号
  public countryCode: String;
  public provCode: String;
  public cityCode: String;
  public distCode: String;
  public townCode: String;
  public level: number;  // 清洗到的级别, 区是第三级， 镇是第四级, 街道/社区是第五集. 取值为1,2, 3, 4,5 ...
  public provNativeCode: String;
  public cityNativeCode: String;
  public distNativeCode: String;
  public townNativeCode: String;
  public fullAddress: String;    // 地图引擎清洗之后的详细地址
  public precision: number;   // 精度信息, 使用百分制的方式进行度量准确性
  constructor(countryName: String, provName: String, cityName: String, distName: String, townName: String, street: String, streetNumber: String, countryCode: String, provCode: String, cityCode: String, distCode: String, townCode: String, level: number, provNativeCode: String, cityNativeCode: String, distNativeCode: String, townNativeCode: String, fullAddress: String, precision: number) {
    this.countryName = countryName;
    this.provName = provName;
    this.cityName = cityName;
    this.distName = distName;
    this.townName = townName;
    this.street = street;
    this.streetNumber = streetNumber;
    this.countryCode = countryCode;
    this.provCode = provCode;
    this.cityCode = cityCode;
    this.distCode = distCode;
    this.townCode = townCode;
    this.level = level;
    this.provNativeCode = provNativeCode;
    this.cityNativeCode = cityNativeCode;
    this.distNativeCode = distNativeCode;
    this.townNativeCode = townNativeCode;
    this.fullAddress = fullAddress;
    this.precision = precision;
  }
}
