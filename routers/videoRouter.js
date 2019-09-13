import express from "express";
import routes from "../routes";
import {
  Videos,
  Upload,
  VideoDetail,
  EditVideo,
  DeleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, Videos);
videoRouter.get(routes.upload, Upload);
videoRouter.get(routes.videoDetail, VideoDetail);
videoRouter.get(routes.editVideo, EditVideo);
videoRouter.get(routes.deleteVideo, DeleteVideo);

export default videoRouter;
