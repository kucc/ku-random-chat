import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtConfig } from 'src/common/config';
import { UserModel } from 'src/common/model/user.model';
import { UserResponseDTO } from 'src/user/dto/user-response.dto';
import { UserService } from 'src/user/user.service';
import { SignInDTO } from './dto/sign-in.dto';
import { SignUpDTO } from './dto/sign-up.dto';
import * as argon2 from 'argon2';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async createNewUser(signUpDTO: SignUpDTO) {
    const { userId, password, email } = signUpDTO;
    const hashedPassword = await argon2.hash(password);
    const newUser = new this.userModel({
      userId,
      password: hashedPassword,
      email,
    });

    const token = this.createAccessToken(newUser);
    newUser.verificationCode = token;
    await newUser.save();
  }

  async isUniqueUserId(userId: string) {
    const user = await this.userModel.findOne({ userId });
    return user ? false : true;
  }

  async isUniqueEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    return user ? false : true;
  }

  async sendVerificationEmail(email: string) {
    const user = await this.userService.findUserByEmail(email);
    const { verificationCode } = user;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'mail.korea.ac.kr',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const VERIFICATION_LINK = `http://localhost:3000/api/auth/verification/${verificationCode}`;

    await transporter.sendMail({
      from: `KU Random Chat <${process.env.MAIL_ID}>`,
      to: email,
      subject: 'KU Random Chat ??????????????? ?????? ??????',
      html: `<div> ??????????????? ! </div>
      <div> KU Random Chat ??? ???????????? ?????? ??????????????? :) </div>
      <div> ?????? ????????? ???????????? ?????? ????????? ???????????????. </div> 
      <a href=${VERIFICATION_LINK} role="button"> ?????? ?????? </a>`,
    });

    transporter.close();
  }

  createAccessToken(userModel: UserModel) {
    const userResponseDTO = new UserResponseDTO(userModel);
    const accessToken = jwt.sign(
      { data: userResponseDTO, timestamp: Date.now() },
      JwtConfig.tokenSecret,
      { expiresIn: JwtConfig.tokenExpiresIn },
    );

    return accessToken;
  }

  async signIn(signinDTO: SignInDTO) {
    const userRecord = await this.userService.findUserById(signinDTO.userId);
    const isValidPassword = await argon2.verify(
      userRecord.password,
      signinDTO.password,
    );
    if (!isValidPassword) {
      throw new BadRequestException('not valid password');
    }

    return this.createAccessToken(userRecord);
  }
}
