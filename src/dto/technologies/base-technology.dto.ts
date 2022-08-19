import { ApiProperty } from "@nestjs/swagger";

class Technology {
  @ApiProperty()
  technologyName: string;

  @ApiProperty()
  image?: string;
}

export class BaseTechnology {
  @ApiProperty()
  technologyType: string;

  @ApiProperty()
  technology?: Array<Technology>
}
