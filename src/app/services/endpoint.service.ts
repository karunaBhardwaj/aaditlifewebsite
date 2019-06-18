import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  public readonly sendgridApi = 'https://api.sendgrid.com/v3/mail/send';
  public readonly sgApiKey = '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';
}

