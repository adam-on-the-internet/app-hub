import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { ServiceUrl } from "src/app/constants/rest.constants";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent {
  public basicExpressServiceUrl = ServiceUrl.BasicExpress;

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToAppManagement() {
    return this.navHelper.goToApplicationOverview();
  }

}
