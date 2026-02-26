import { Request, Response } from "express";
import { T } from "../libs/types/comman";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/errors";
import AuthService from "../models/Auth.service";

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
    console.log("TOKEN:", token);
    

    res.json({ member: result, token });
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
    console.log("TOKEN:", token);

    res.json({ member: result, token });
  } catch (err) {
    console.log("Error, login", err);
    res.send(err);
  }
};

export default memberController;
