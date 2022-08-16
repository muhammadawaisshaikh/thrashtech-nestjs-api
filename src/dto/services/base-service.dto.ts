import { ApiProperty } from "@nestjs/swagger";

export class BaseService {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  image?: string;
}
