import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

/** Member */
router.get("/member/restaurant", memberController.getRestaurant);

router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);


router.post(
  "/member/logout",
  // Authonticated bo'lgan userga ruxsat berish
  memberController.verifyAuth,
  // Logout qilish uchun controller
  memberController.logout,
);


router.get(
  "/member/detail",
  // Authonticated bo'lgan userga ruxsat berish
  memberController.verifyAuth,
  // Member detailini olish uchun controller
  memberController.getMemberDetail,
);


router.post(
  "/member/update",
  // Authonticated bo'lgan userga ruxsat berish
  memberController.verifyAuth, 
  // Rasmni upload qilish uchun middleware
  // "memberImage" nomi bilan rasmni qabul qilib va uni "members" papkasiga saqlash
  uploader("members").single("memberImage"),
  // Member ma'lumotlarini update qilish uchun controller
  memberController.updateMember
);


// Top users ni olish uchun route. Bu route ga GET request yuborilganda, memberController.getTopUsers methodi chaqiriladi va top users ni qaytaradi.
router.get("/member/top-users", memberController.getTopUsers);

/** Product */

/** Order */

export default router;
