import { ApiProperty } from "@nestjs/swagger"

export class BaseProject {
    @ApiProperty()
    title: string

    @ApiProperty()
    description?: string

    @ApiProperty()
    url?: string

    @ApiProperty()
    image?: string
}