import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  public notyf = new Notyf();

  public success(message: string) {
    this.notyf.success(message);
  }

  public error(error: any) {
    const message = this.extractMessage(error);
    this.notyf.error(message);
  }

  private extractMessage(error: any): string {
    if (typeof error === 'string') return error;

    if (this.isHttpErrorResponse(error)) {
      const httpError = error as HttpErrorResponse;

      if (httpError.status === 0) return 'שגיאת רשת - נא לבדוק את חיבור האינטרנט.';

      const status = httpError.status;
      const data = httpError.error;

      const statusMessages: Record<number, string> = {
        401: 'נא להתחבר מחדש',
        403: 'אין לך הרשאה לגשת למשאב זה.',
        404: 'לא נמצאה כתובת כזו.',
        500: 'שגיאת שרת, אנא נסה מאוחר יותר',
      };

      if (statusMessages[status]) return statusMessages[status];
      if (typeof data === 'string') return data;
      if (typeof data === 'object' && 'message' in data) return String(data.message);
      if (Array.isArray(data)) return String(data[0]);

      return `HTTP Error: ${status}`;
    }

    return 'אירעה שגיאה לא צפויה...';
  }

  private isHttpErrorResponse(error: any): error is HttpErrorResponse {
    return error instanceof HttpErrorResponse;
  }
}
