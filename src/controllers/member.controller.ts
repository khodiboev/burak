import { Request, Response } from "express";
import { T } from "../libs/types/comman";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors, { HttpCode } from "../libs/errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

//React loyiha uchun
const memberService = new MemberService();
const memberController: T = {};
const authService = new AuthService();


memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const newMember: MemberInput = req.body,
      result: Member = await memberService.signup(newMember);
    const token = await authService.createToken(result);
    res.cookie("accessToken", token, {
      maxAge: 1000 * 3600 * 6, //6h
      httpOnly: false,
    });

    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error, signup", err);
    if (err instanceof Errors) res.status(err.code).json({ err });
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};


memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberService.login(input);
      const token = await authService.createToken(result);
    
    res.cookie("accessToken", token, {
      maxAge: 1000 * 3600 * 6, //6h
      httpOnly: false,
    });

    res.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error, login", err);
    res.send(err);
  }
};

export default memberController;
