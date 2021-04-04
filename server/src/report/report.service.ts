import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportModel } from '../common/model/report.model';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel('Report') private readonly reportModel: Model<ReportModel>,
  ) {}
}
