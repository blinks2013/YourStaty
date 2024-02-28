import { Body, Controller, Inject, Post, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateNewUserDTO } from '../dto/create_user.dto';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { errorName } from 'src/constants/error';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { PaginationService } from 'src/utils/pagination/pagination.service';
import { Request } from 'express';

@Controller()
export class UserController {
    constructor(
        private userService: UserService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private paginationService: PaginationService,
    ) {}

    @ResponseCustom(responseName.USER_CREATED)
    @Post()
    async getUsers(@Req() req: Request, @Body() userInfo: CreateNewUserDTO) {
        this.logger.log('error', 'I m information');

        throw new HttpExceptionWrapper(errorName.CUSTOM_COMMON_ERROR, [
            {
                field: 'email',
                error: 'email already exists',
            },
        ]);

        return;
        // normal response
        await this.userService.getAllUser(userInfo);

        // pagination response
        const metadata = this.paginationService.getPaginationMetadata(req, 20);

        return {
            data: ['pagination'],
            metadata,
        };
    }

    @Post('/static-error')
    staticError() {
        // Don't use
        // throw new Error('User already exists');

        // Http wrapper error
        throw new HttpExceptionWrapper(errorName.CUSTOM_COMMON_ERROR, [
            {
                field: 'email',
                error: 'email already exists',
            },
        ]);

        // Http Error
        // throw new HttpException('name alreay exixts', 200);

        // badRequest Error
        // throw new BadRequestException({});

        return;
    }
}
