import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'ok',
      service: 'kari-dev-sample-backend',
      timestamp: new Date().toISOString(),
    }
  }
}
