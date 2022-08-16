import { ApiProperty } from '@nestjs/swagger';

export class Project {
    /**
     * Project Entity
     * @example Unation
     */

    @ApiProperty({ example: 'Unation', description: 'The name of Project' })
    title: string;

    @ApiProperty({ example: "An Event Management Web App", description: 'The description of Project' })
    description: string;

    @ApiProperty({ example: "www.unation.com", description: 'The url of Project' })
    url: string;

    @ApiProperty({ example: "www.sample.com/cover.png", description: 'The image of Project' })
    image: string;
}