import { EnterInfoModel } from 'src/common/model/enter-info.model';

export class EnterInfoDTO {
  constructor(enterInfoModel: EnterInfoModel) {
    this.age = enterInfoModel.age;
    this.major = enterInfoModel.major; 
    this.sex = enterInfoModel.sex; 
  }

  public readonly age: number;
  public readonly major: string;
  public readonly sex: string;
}
