import { model, models, Schema , Document} from "mongoose";

interface INavBarItem {
  title: string;
  path: string;
}
export interface INavBarItemDoc extends Document, INavBarItem {}

const NavBarSchema = new Schema<INavBarItemDoc>(
  {
    title: { type: String },
    path: { type: String },
  },
  { collection: "navBar", timestamps: true }
);

const NavBar = models.NavBar || model<INavBarItemDoc>("NavBar", NavBarSchema);
export default NavBar;
