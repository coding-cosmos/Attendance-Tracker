import { MenuController } from "./menuController";
import StarterController from "./starterController";
import "./styles/style.css";
import Data from "./Data/data";
import HomePageController from "./homePageController";
import {SchedulePageController} from "./schedulePageController";
import SubjectPageController from "./subjectPageController";

Data();
StarterController();
MenuController();
SubjectPageController();
SchedulePageController();
HomePageController();