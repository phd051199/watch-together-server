import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryBus } from '@nestjs/cqrs';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { type TokenPayload } from '@/common/types/context.type';
import { GetUserByIdQuery } from '@/user/queries';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    public readonly configService: ConfigService,
    private readonly queryBus: QueryBus,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_CFG.secret'),
    });
  }

  validate(payload: TokenPayload) {
    return this.queryBus.execute(new GetUserByIdQuery(payload.uid));
  }
}
