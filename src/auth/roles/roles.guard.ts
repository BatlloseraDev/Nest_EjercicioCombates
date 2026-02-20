import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  
  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    if (!user || !user.roles || user.roles.length === 0) {
      return false;
    }
    


    const hasRole = user.roles.some((userRole: any) => {
     
      if (typeof userRole === 'string') {
        return requiredRoles.includes(userRole);
      }
 
      return requiredRoles.includes(userRole.role) || requiredRoles.includes(userRole.name);
    });
    
    return hasRole;
  }
}
