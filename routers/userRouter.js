import express from "express";
import routes from "../routes";
import {
  Users,
  UserDetail,
  EditProfile,
  ChangePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, Users);
userRouter.get(routes.userDetail, UserDetail);
userRouter.get(routes.editProfile, EditProfile);
userRouter.get(routes.changePassword, ChangePassword);

export default userRouter;
