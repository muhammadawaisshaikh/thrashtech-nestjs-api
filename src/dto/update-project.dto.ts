import { BaseProject } from "./base-project.dto";

export class UpdateCompanyDto extends BaseProject {
  completedAt: Date;
}